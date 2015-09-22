surveyList.controller('PizzaSurveyCtrl', function PizzaSurveyCtrl($scope, SurveysFactory) {
  $scope.surveys = SurveysFactory.surveys;
  $scope.SurveysFactory = SurveysFactory;
  $scope.addSurveyLikesPizza = function(survey) {
    survey.likesPizza = true;
  };

  $scope.addSurveyLikesBurgers = function(survey) {
    survey.likesBurgers = true;
  };
});
