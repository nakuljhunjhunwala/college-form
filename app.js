//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const l=require("lodash");
const app = express();
const PORT = process.env.PORT || 3000



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://nakul-admin:nakul@cluster-ffwly.mongodb.net/formDB" , { useNewUrlParser: true , useUnifiedTopology: true});




const formSchema = {
    aadharNo            : String,
    studentName         : String,
    fatherName          : String,
    surname             : String,
    motherName          : String,
    religion            : String,
    cast                : String,
    subcast             : String,
    nationality         : String,
    motherTongue        : String,
    fOccupation         : String,
    mOccupation         : String,
    guardian            : String,
    fMobileNo           : Number,
    mMobileNo           : Number,
    gender              : String,
    DobWord             : String,
    DOB                 : Date,
    birthPlace          : String,
    leavingCertificate  : String,
    lastSchoolAttended  : String,
    address             : String,
    lastSchoolName      : String,
    sscSeatNo           : String,
    boardName           : String,
    dateOfPassing       : Date,
    englishMarks        : Number,
    marathiMarks        : Number,
    hindiMarks          : Number,
    mathsMarks          : Number,
    scienceMarks        : Number,
    socialScienceMarks  : Number,
    total               : Number,
    percentage          : String,
    otherTotal          : Number,
    otherPercentage     : String,
    optionalSubject     : String,
    optionalSubject2    : String,
    attatchedDocument   : String,
  }




const Form = mongoose.model("form" , formSchema);









app.get("/" , function (req , res) {

   
    res.render("form");
  
  })





  app.post("/", function (req ,res) {

    const aadharNo           = req.body.adr;
    const studentName        = req.body.name;
    const fatherName         = req.body.fname;
    const surname            = req.body.sname;
    const motherName         = req.body.mname;
    const religion           = req.body.rel;
    const cast               = req.body.cast
    const subcast            = req.body.scast;
    const nationality        = req.body.nat;
    const motherTongue       = req.body.mt;
    const fOccupation        = req.body.focc;
    const mOccupation        = req.body.mooc;
    const guardian           = req.body.gocc;
    const fMobileNo          = req.body.fmn;
    const mMobileNo          = req.body.mmn;
    const gender             = req.body.gender;
    const DobWord            = req.body.dobw;
    const DOB                = req.body.dob;
    const birthPlace         = req.body.bp;
    const leavingCertificate = req.body.proof;
    const lastSchoolAttended = req.body.ls;
    const address            = req.body.ta;
    const lastSchoolName     = req.body.ssc;
    const sscSeatNo          = req.body.seat;
    const boardName          = req.body.bn;
    const dateOfPassing      = req.body.dop;
    const englishMarks       = req.body.em;
    const marathiMarks       = req.body.mm;
    const hindiMarks         = req.body.hm;
    const mathsMarks         = req.body.msm;
    const scienceMarks       = req.body.sm;
    const socialScienceMarks = req.body.ssm;
    const total              = req.body.tot;
    const percentage         = req.body.per;
    const otherTotal         = req.body.otot;
    const otherPercentage    = req.body.oper;
    const optionalSubject    = req.body.opt1;
    const optionalSubject2   = req.body.otp2;
    const attatchedDocument  = req.body.doc;
  
 


  const newPost = new Form({
    aadharNo           : aadharNo          ,
    studentName        : studentName       ,
    fatherName         : fatherName        ,
    surname            : surname           ,
    motherName         : motherName        ,
    religion           : religion          ,
    cast               : cast              ,
    subcast            : subcast           ,
    nationality        : nationality       ,
    motherTongue       : motherTongue      ,
    fOccupation        : fOccupation       ,
    mOccupation        : mOccupation       ,
    guardian           : guardian          ,
    fMobileNo          : fMobileNo         ,
    mMobileNo          : mMobileNo         ,
    gender             : gender            ,
    DobWord            : DobWord           ,
    DOB                : DOB               ,
    birthPlace         : birthPlace        ,
    leavingCertificate : leavingCertificate,
    lastSchoolAttended : lastSchoolAttended,
    address            : address           ,
    lastSchoolName     : lastSchoolName    ,
    sscSeatNo          : sscSeatNo         ,
    boardName          : boardName         ,
    dateOfPassing      : dateOfPassing     ,
    englishMarks       : englishMarks      ,
    marathiMarks       : marathiMarks      ,
    hindiMarks         : hindiMarks        ,
    mathsMarks         : mathsMarks        ,
    scienceMarks       : scienceMarks      ,
    socialScienceMarks : socialScienceMarks,
    total              : total             ,
    percentage         : percentage        ,
    otherTotal         : otherTotal        ,
    otherPercentage    : otherPercentage   ,
    optionalSubject    : optionalSubject   ,
    optionalSubject2   : optionalSubject2  ,
   
  })
  newPost.save(function(err,result){ 
    if (err){ 
        console.log(err); 
    } 
    else{ 
        console.log(result) 
    } 
});
  
    res.redirect("/");
  })


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

