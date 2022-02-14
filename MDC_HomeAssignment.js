var params = {
    ResourceId: 'ResourceId',
    ResourceType: 'AWS::SSM::AssociationCompliance',
    ComplianceTypes: [
        COMPLIANT | NON_COMPLIANT
    ],
    NextToken: ''
};

var result;

configservice.getComplianceDetailsByResource(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else result = data.EvaluationResults;  // successful response
});


result.map((item) => {
    if (item.ComplianceType === "COMPLIANT") 
        item.status = 'healthy';    
    else
        item.status = 'not healthy';
});