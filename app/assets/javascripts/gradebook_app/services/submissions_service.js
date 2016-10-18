Gradebook.factory('SubmissionService', ['Restangular', '$q', function(Restangular, $q){

	var stub = {}

  stub.applyFlatCurve = function(submissions, flatRate, pointsPossible) {
    var requests = []
    _.each(submissions, function(submission) {
      var realScore = ((submission.raw_score / pointsPossible) * 100) + flatRate;
      Restangular.restangularizeElement(null, submission, 'submissions')
      requests.push(submission.patch({real_score: realScore}))
    })
    return $q.all(requests).then(function(response) {
      return response
    })
  }

	return stub

}]);