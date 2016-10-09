angular.module('languages')
  .service('mainService', function ($http) {

    this.getLanguages = () => {
      return $http.get(
        'http://localhost:4000/api/languages'
      );
    };

    this.addLanguage = (language) => {
      return $http.post(
        'http://localhost:4000/api/languages', language
      );
    };

    this.findLanguage = (languageName) => {
      return $http.get(
      'http://localhost:4000/api/languages/' + languageName
      );
    };

  })
