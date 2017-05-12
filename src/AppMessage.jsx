import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from 'project-root/Constants';
import { IntlProvider, addLocaleData } from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';

import Movie from 'project-ressources/Movie';

import UMovie from 'project-root/UMovie';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  static childContextTypes = {
    changeLanguage: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
    messages: PropTypes.object.isRequired
  };

  state = {};

  componentWillMount() {
    const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || DEFAULT_LANGUAGE;
    this.state.language = (!!language.indexOf('fr')) ? DEFAULT_LANGUAGE : 'fr-CA';
    this.state.messages = this.getMessages(this.state.language);

    addLocaleData([...en, ...fr]);
  }

  changeLanguage(newLanguage) {
    this.setState({
      lang: newLanguage.split('-')[0],
      language: newLanguage,
      messages: this.getMessages(newLanguage)
    });
  }

  changePage(newPage) {
    this.setState({page: newPage});
  }

  getChildContext() {
    return {
      changeLanguage: this.changeLanguage.bind(this),
      lang: this.state.language.split('-')[0],
      language: this.state.language,
      languages: SUPPORTED_LANGUAGES,
      messages: this.state.messages
    };
  }

  getMessages(language) {
    return {
      Movie: Movie[language],
    };
  }

  render() {
    const {language, messages, page} = this.state;

    return (
      <IntlProvider locale={language} messages={messages}>
        <UMovie key={language} page={page} {...this.props} />
      </IntlProvider>
    );
  };
};
