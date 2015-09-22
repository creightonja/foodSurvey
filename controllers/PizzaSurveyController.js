surveyList.controller('PizzaSurveyCtrl', function PizzaSurveyCtrl($scope, SurveysFactory) {
  $scope.surveys = SurveysFactory.surveys;
  $scope.addSurveyLikesPizza = function(survey) {
    survey.likesPizza = true;
  };
});
