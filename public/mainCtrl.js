angular.module('languages').controller('mainCtrl', function ($scope, mainService) {

  $scope.getLanguages = () => {
    mainService.getLanguages().then( results => {
      $scope.languages = results.data;
      console.log($scope.languages)
    });
  };

  $scope.getLanguages();

  $scope.addLanguage = (language) => {
    mainService.addLanguage(language).then( results => {
      $scope.languages = results.data;
      // $scope.getLanguages();
    })
  };

  $scope.findLanguage = (languageName) => {
    mainService.findLanguage(languageName).then(
      results => {
        $scope.languages = results.data;
      }
    );
  };
})
