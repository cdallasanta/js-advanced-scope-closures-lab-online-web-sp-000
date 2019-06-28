function produceDrivingRange(range) {
  return function(start, end){
    const startNum = parseInt(start.replace('th',''));
    const endNum = parseInt(end.replace('th',''));
    const distance = Math.abs(startNum - endNum);

    if (distance > range) {
      return ``
    } else {
      return `within range by ${range-distance}`
    }
  }
}
