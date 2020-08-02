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

mongoose.connect("mongodb+srv://scholarsdatabase:saima98765@cluster0.lhonf.mongodb.net/formDB" , { useNewUrlParser: true , useUnifiedTopology: true});


// mongodb+srv://nakul-admin:nakul@cluster-ffwly.mongodb.net/formDB

const formSchema = {
    formNo              : String,
    submitDate          : String,
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
    optionalSubject3    : String,
    attatchedDocument   : String,
  }




const Form = mongoose.model("commerce" , formSchema);

const Form2 = mongoose.model("science" , formSchema);









app.get("/" , function (req , res) {
  res.render("index")
})


app.get("/teachers" , function (req , res) {
  res.render("t")
})


app.get("/involved" , function (req , res) {
  res.render("gt")
})


app.get("/activities" , function (req , res) {
  res.render("activities")
})


app.get("/contact" , function (req , res) {
  res.render("contact")
})





app.get("/commerce" , function (req , res) {


 Form.find({}, function (err, data) { 
    if (err){ 
        console.log(err); 
    } 
    else{ 
      res.render("commerce" , {formvalue : data.length+1});
      
    } 
}); 



    
  
  })


  


  app.post("/commerce", function (req ,res) {

    var d = new Date();
    const submitDate         = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
    const aadharNo           = l.toUpper(req.body.adr);
    const studentName        = l.toUpper(req.body.name);
    const fatherName         = l.toUpper(req.body.fname);
    const surname            = l.toUpper(req.body.sname);
    const motherName         = l.toUpper(req.body.mname);
    const religion           = l.toUpper(req.body.rel);
    const cast               = l.toUpper(req.body.cast);
    const subcast            = l.toUpper(req.body.scast);
    const nationality        = l.toUpper(req.body.nat);
    const motherTongue       = l.toUpper(req.body.mt);
    const fOccupation        = l.toUpper(req.body.focc);
    const mOccupation        = l.toUpper(req.body.mooc);
    const guardian           = l.toUpper(req.body.gocc);
    const fMobileNo          = l.toUpper(req.body.fmn);
    const mMobileNo          = l.toUpper(req.body.mmn);
    const gender             = l.toUpper(req.body.gender);
    const DobWord            = l.toUpper(req.body.dobw);
    const DOB                = l.toUpper(req.body.dob);
    const birthPlace         = l.toUpper(req.body.bp);
    const leavingCertificate = l.toUpper(req.body.proof);
    const lastSchoolAttended = l.toUpper(req.body.ls);
    const address            = l.toUpper(req.body.ta);
    const lastSchoolName     = l.toUpper(req.body.ssc);
    const sscSeatNo          = l.toUpper(req.body.seat);
    const boardName          = l.toUpper(req.body.bn);
    const dateOfPassing      = l.toUpper(req.body.dop);
    const englishMarks       = l.toUpper(req.body.em);
    const marathiMarks       = l.toUpper(req.body.mm);
    const hindiMarks         = l.toUpper(req.body.hm);
    const mathsMarks         = l.toUpper(req.body.msm);
    const scienceMarks       = l.toUpper(req.body.sm);
    const socialScienceMarks = l.toUpper(req.body.ssm);
    const total              = l.toUpper(req.body.tot);
    const percentage         = l.toUpper(req.body.per);
    const otherTotal         = l.toUpper(req.body.otot);
    const otherPercentage    = l.toUpper(req.body.oper);
    const optionalSubject    = l.toUpper(req.body.opt1);
    const optionalSubject2   = l.toUpper(req.body.otp2);
    const attatchedDocument  = l.toUpper(req.body.docs);
  

    

    

 


  const newPost = new Form({
    formNo             : req.body.t1       ,
    submitDate         : submitDate        ,
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
    attatchedDocument  : attatchedDocument ,
  })
  newPost.save(function(err,result){ 
    if (err){ 
      res.send(err);
    } 
    else{ 
        res.redirect("/");
    } 
});
  
    
  })














  app.get("/science" , function (req , res) {


    Form2.find({}, function (err, data) { 
       if (err){ 
           console.log(err); 
       } 
       else{ 
         res.render("science" , {formvalue : data.length+1});
         
       } 
   }); 
   
   
   
       
     
     })
   
   
     
   
   
     app.post("/science", function (req ,res) {
   
       var d = new Date();
       const submitDate         = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
       const aadharNo           = l.toUpper(req.body.adr);
       const studentName        = l.toUpper(req.body.name);
       const fatherName         = l.toUpper(req.body.fname);
       const surname            = l.toUpper(req.body.sname);
       const motherName         = l.toUpper(req.body.mname);
       const religion           = l.toUpper(req.body.rel);
       const cast               = l.toUpper(req.body.cast);
       const subcast            = l.toUpper(req.body.scast);
       const nationality        = l.toUpper(req.body.nat);
       const motherTongue       = l.toUpper(req.body.mt);
       const fOccupation        = l.toUpper(req.body.focc);
       const mOccupation        = l.toUpper(req.body.mooc);
       const guardian           = l.toUpper(req.body.gocc);
       const fMobileNo          = l.toUpper(req.body.fmn);
       const mMobileNo          = l.toUpper(req.body.mmn);
       const gender             = l.toUpper(req.body.gender);
       const DobWord            = l.toUpper(req.body.dobw);
       const DOB                = l.toUpper(req.body.dob);
       const birthPlace         = l.toUpper(req.body.bp);
       const leavingCertificate = l.toUpper(req.body.proof);
       const lastSchoolAttended = l.toUpper(req.body.ls);
       const address            = l.toUpper(req.body.ta);
       const lastSchoolName     = l.toUpper(req.body.ssc);
       const sscSeatNo          = l.toUpper(req.body.seat);
       const boardName          = l.toUpper(req.body.bn);
       const dateOfPassing      = l.toUpper(req.body.dop);
       const englishMarks       = l.toUpper(req.body.em);
       const marathiMarks       = l.toUpper(req.body.mm);
       const hindiMarks         = l.toUpper(req.body.hm);
       const mathsMarks         = l.toUpper(req.body.msm);
       const scienceMarks       = l.toUpper(req.body.sm);
       const socialScienceMarks = l.toUpper(req.body.ssm);
       const total              = l.toUpper(req.body.tot);
       const percentage         = l.toUpper(req.body.per);
       const otherTotal         = l.toUpper(req.body.otot);
       const otherPercentage    = l.toUpper(req.body.oper);
       const optionalSubject    = l.toUpper(req.body.opt1);
       const optionalSubject2   = l.toUpper(req.body.otp2);
       const optionalSubject3   = l.toUpper(req.body.otp3);
       const attatchedDocument  = l.toUpper(req.body.docs);
     
   
       
   
       
   
    
   
   
     const newPost2 = new Form2({
       formNo             : req.body.t1       ,
       submitDate         : submitDate        ,
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
       optionalSubject3   : optionalSubject3  ,
       attatchedDocument  : attatchedDocument ,
     })
     newPost2.save(function(err,result){ 
       if (err){ 
         res.send(err);
       } 
       else{ 
        res.redirect("/");
       } 
   });
     
       
     })
   









app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

