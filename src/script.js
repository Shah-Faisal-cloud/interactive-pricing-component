const pageViewsDisplay = document.getElementById("page-views");
const priceDisplays = document.querySelectorAll(".price");
const periodDisplays = document.querySelectorAll(".period");
const rangeSlider = document.getElementById("range-slider");
const periodSlider = document.getElementById("period-slider");

let period = "monthly";
let pageViews;
let price;

const pricesObj = {
    1: 8,
    2: 12,
    3: 16, 
    4: 24, 
    5: 36
};

const pageViewsObj = {
    1: "10K", 
    2: "50K", 
    3: "100K", 
    4: "500K", 
    5: "1M"
};

window.onload = calculate;

periodSlider.addEventListener("input", () => {
    getBillingPeriod();
    UpdatePeriodSliderUI();
});

rangeSlider.addEventListener("input", calculate);

function getBillingPeriod() {
    period = Number(periodSlider.value) === 1 ? "monthly" : "yearly";
    calculate();
};

function UpdateUI() {
    pageViewsDisplay.textContent = pageViews;
    priceDisplays.forEach(priceDisplay => {
        priceDisplay.textContent = `$${price}`;
    });
    periodDisplays.forEach(periodDisplay => {
        periodDisplay.textContent = `/${period}`;
    });
};


function calculate() {
    let rangeSliderValue = Number(rangeSlider.value);

        price = pricesObj[rangeSliderValue];
        pageViews = pageViewsObj[rangeSliderValue];

        if (period === "yearly") {
            price = Math.floor(price * 0.76);
        };

        UpdateUI();
};

function UpdatePeriodSliderUI() {
    if (Number(periodSlider.value) === 2) {
        periodSlider.classList.add("value-2");
    } else {
        periodSlider.classList.remove("value-2");
    };
};




