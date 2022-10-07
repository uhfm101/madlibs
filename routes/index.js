var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    color: "#FFFFFF",
  });
});

router.post("/story", function(req,res){
  let body = req.body;
  let newStory = getStory(body);
  res.render("story", {
    newStory: newStory,
    color: randomC()
  });
});

module.exports = router;

function getStory(formData){
  if (formData.storyChoice === "4"){
    formData.storyChoice = randomInt();
  }
  if (formData.storyChoice === "1"){
    return generateStory1(formData);
  } else if (formData.storyChoice === "2"){
    return generateStory2(formData)
  } else if (formData.storyChoice === "3"){
    return generateStory3(formData)
  }
  return "invalid";
}

function randomInt(){
  let value = (Math.round(Math.random()*3)+1).toString()
  return value;
}

function generateStory1(formData){
  return `They had always ${formData.verb1} in the ${formData.adjective1} river. It made sense. The river was ${formData.adjective2}. The river likely had a different official name, but to ${formData.noun1} in town, it was and had always been the ${formData.adjective1} river. So it was with great surprise that on this day the ${formData.adjective1} river was a ${formData.noun2} and everyone ${formData.verb2} it.`
} // https://randomwordgenerator.com/paragraph.php

function generateStory2(formData){
  return `The light was out on the front porch of the house. This was ${formData.adjective1}. Judy couldn't remember a time when she had ever seen it out. She ${formData.verb1} out of her ${formData.noun2} and walked to the door. It was slightly ${formData.adjective2} and she knew this meant something terrible. She gently pushed the door open and all her fears were ${formData.verb2}. "Hello" ${formData.noun1} said.`
} // https://randomwordgenerator.com/paragraph.php

function generateStory3(formData){
  return `His parents continued to ${formData.verb1} him. He didn't know what to say to them since they refused to believe the ${formData.noun1}. He explained again and again, and they dismissed his ${formData.adjective2} explanation as a figment of his imagination. There was no way that ${formData.noun2}, who had been dead for five years, could have told him where the treasure had been ${formData.verb2}. Of course, it didn't help that the ${formData.adjective1} ${formData.noun2} was roaring with laughter in the chair next to him as he tried to explain once again how he'd found it.`
} // https://randomwordgenerator.com/paragraph.php

function randomC(){
  let choice = "#"
  while (choice.length < 7 ){
    choice += (Math.round(Math.random() * 15)).toString(16)
  }
  return choice;
}

