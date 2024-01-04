 const taskUrl=`http://localhost:3030/jsonstore/tasks/`;




  const loadButton=document.querySelector("#load-course");
  loadButton.addEventListener('click', async(e)=>{
    const response=await fetch(taskUrl);
    const data= await response.json();
    const courses=Object.values(data);

  });

  function handler(course){
     const listconteiner=document.querySelector("#list");
     const divconteiner=document.createElement('div');
     divconteiner.className="conteiner";

  const coursetitle=document.createElement('h2');
  coursetitle.textContent=course.title;
  const teacherElement=document.createElement('h3');
  teacherElement.textContent=course.teacher;

      const courseType=document.createElement('h3');
      courseType.textContent=course.type;

       const descripotionElemenst=document.createElement('h4');
       descripotionElemenst.textContent=course.description;
   const editBtn=document.createElement('button');
   editBtn.className="edit-btn";
   editBtn.textContent="Edit Course";

    const finishBtn=document.createElement('button');
    finishBtn.className="finish-btn";
    finishBtn.textContent="Finish Course";
  }