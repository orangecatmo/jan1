var time = new Date()

var currentDateString = time.toLocaleString().split(" ")[0]

var currrentDateSplitArr = currentDateString.split('/')

var formMate = ["年", "月", "日"]

var currentDate = ''

for (var i = 0; i < currrentDateSplitArr.length; i++) {
  currentDate += currrentDateSplitArr[i] + formMate[i]
  
}

var currentDateElement = document.querySelector('#currentDate')
var timeHsElement = document.querySelector('#timeHs')

currentDateElement.innerHTML = currentDate

var currentMinutes = time.getMinutes()

timeHsElement.innerHTML = time.getHours() + ":" + (currentMinutes < 10 ? "0" + currentMinutes : currentMinutes)

var week = [
  {
   weekNum: 0,
   weekString: "日曜日"
  },
  {
    weekNum: 1,
    weekString: "月曜日"
   },
   {
    weekNum: 2,
    weekString: "火曜日"
   },
   {
    weekNum: 3,
    weekString: "水曜日"
   },
   {
    weekNum: 4,
    weekString: "木曜日"
   },
   {
    weekNum: 5,
    weekString: "金曜日"
   },
   {
    weekNum: 6,
    weekString: "土曜日"
   }
  ]

var currentWeek = time.getDay()

var timeWeek = document.querySelector('#timeWeek')

for (var i = 0; i < week.length; i++) {

  if (currentWeek === week[i].weekNum) 
    timeWeek.innerHTML = week[i].weekString

}

