let onTimeCount = 0;
let lateCount = 0;

function addAttendance(value, target) {
  if (target === 'onTimeCount') {
    onTimeCount += value;
    document.getElementById('onTimeCount').innerText = onTimeCount;
  } else if (target === 'lateCount') {
    lateCount += value;
    document.getElementById('lateCount').innerText = lateCount;
  }
}

function resetCount(target) {
  if (target === 'onTimeCount') {
    onTimeCount = 0;
    document.getElementById('onTimeCount').innerText = onTimeCount;
  } else if (target === 'lateCount') {
    lateCount = 0;
    document.getElementById('lateCount').innerText = lateCount;
  }
}
