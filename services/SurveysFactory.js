surveyList.factory('SurveysFactory', function SurveysFactory() {
  var factory = {};
  factory.surveys = [];

  factory.addSurvey = function() {
    var survey = { name: factory.surveyName, likesPizza: false, likesBurgers: false };
    factory.surveys.push(survey);
    factory.surveyName = null;
  };

  factory.deleteSurvey = function(survey) {
    var index = factory.surveys.indexOf(survey);
    factory.surveys.splice(index, 1);
  };
  return factory;
});
