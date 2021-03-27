//hide and show
function hideContent() {
  var content1 = document.getElementById("content1");
  if (content1.style.display === "none") {
    content1.style.display = "block";
  } else {
    content1.style.display = "none";
  }
}
//slider
const slider = function () {
  const slides = document.querySelectorAll(".card1");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (card1) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - card1)}%)`)
    );
  };

  // Next card1
  const nextSlide = function () {
    console.log("next");
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    console.log("previous");

    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
    e.key === "ArrowDown" && prevSlide();
    e.key === "ArrowUp" && nextSlide();
  });
};
slider();

//doctors
let doctors = [
  {
    titile: "Pediatric BMT",
    name: "Dr. Vijay Agarwal",
    decription: " Lead & Sr. Consultant - Medical Oncology & Haematology",
    info: `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with 
          over 12 years of experience in Oncology. Dr. Agarwal has been
          practising Medical Oncology since 2004.`,
    image: `images/doctor.png`,
  },
  {
    titile: "Adult BMT",
    name: "Dr. Vijay Agarwal",
    decription: " Lead & Sr. Consultant - Medical Oncology & Haematology",
    info: `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with 
         over 12 years of experience in Oncology. Dr. Agarwal has been
         practising Medical Oncology since 2004.`,
    image: `images/doctor.png`,
  },
  {
    name: "Dr. Vijay Agarwal",
    decription: " Lead & Sr. Consultant - Medical Oncology & Haematology",
    info: `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with 
            over 12 years of experience in Oncology. Dr. Agarwal has been
            practising Medical Oncology since 2004.`,
    image: `images/doctor.png`,
  },
  {
    name: "Dr. Vijay Agarwal",
    decription: " Lead & Sr. Consultant - Medical Oncology & Haematology",
    info: `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with 
            over 12 years of experience in Oncology. Dr. Agarwal has been
            practising Medical Oncology since 2004.`,
    image: `images/doctor.png`,
  },
];

for (let i = 0; i < doctors.length; i++) {
  const div = document.createElement("div");

  div.innerHTML = `
   <div class="agile d-flex m-10  flex-center " style="color: #22B78E;font-family: StagSans;font-size:24px;text-align: center;">
        <h2 >${doctors[i].titile ? doctors[i].titile : ""}</h2>
     </div> 
    <img src=${doctors[i].image} alt="Bitmap_image">
     <p style=" color: #1D5AA6;font-size: 22px;">${doctors[i].name}</p>
     <p class="agile__milestone__box__description font-green text-center lh-lg mt-1" style="color: #1D5AA6;font-size: 12px;letter-spacing: 1.2px;text-align: center;">MD, MRCP, PhD,CCT<br>
     ${doctors[i].decription}</p>                     
     <p class="agile__milestone__box__description  text-center lh-lg  mt-10" style="font-size:15px;font-family: StagSans;text-align: center;line-height: 20px;">
     ${doctors[i].info}
     </p>
     <button class="btn btn-lg" style="background: radial-gradient( #17EAD9 0%, #6078EA 100%);border-radius: 4px;color: white;text-align: center;padding: 1%;">Know More</button> 
     `;

  document.getElementById("doctorContent").appendChild(div);
}
