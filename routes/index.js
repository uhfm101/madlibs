var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post("/story", function(req,res){
  let body = req.body;
  let newStory = getStory(body);
  res.render("story", {
    newStory: newStory
  });
});

module.exports = router;

function getStory(formData){
  if (formData.storyChoice === "1"){
    return generateStory1(formData);
  } else if (formData.storyChoice === "2"){
    return generateStory2(formData)
  } else if (formData.storyChoice === "3"){
    return generateStory3(formData)
  }
  return "invalid";
}

function generateStory1(formData){
  return `They had always ${formData.verb1} in the ${formData.adjective1} river. It made sense. The river was ${formData.adjective2}. The river likely had a different official name, but to ${formData.noun1} in town, it was and had always been the ${formData.adjective1} river. So it was with great surprise that on this day the ${formData.adjective1} river was a ${formData.noun2} and everyone ${formData.verb2} it.`
}

function generateStory2(formData){
  return `There came to be a ${formData.noun1} who ${formData.verb1} for its ${formData.adjective1} brother-in-law.`
}

function generateStory3(formData){
  return `The trick or treater dressed up as ${formData.noun1} inorder to ${formData.verb1} around town for the ${formData.adjective1} candy`
}