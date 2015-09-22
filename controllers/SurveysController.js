surveyList.controller('SurveysCtrl', function SurveysCtrl($scope, SurveysFactory) {
  $scope.surveys = SurveysFactory.surveys;
  $scope.SurveysFactory = SurveysFactory;
});
