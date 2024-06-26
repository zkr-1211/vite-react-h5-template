export const useToChinese = (Num: any): string => {
  if (Num === undefined || Num === null || Num === "") return "";
  if (typeof Num == "number") {
    // eslint-disable-next-line no-var, no-new-wrappers
    Num = new String(Num);
  }
  Num = Num.replace(/,/g, "");
  Num = Num.replace(/ /g, "");
  Num = Num.replace(/￥/g, "");
  if (isNaN(Num)) {
    throw Error("请检查小写金额是否正确");
  }
  //  字符处理完毕后开始转换，采用前后两部分分别转换
  const part = String(Num).split(".");
  // eslint-disable-next-line no-var
  var newchar = "";
  //  小数点前进行转化
  // eslint-disable-next-line no-var
  for (var i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      return "";
      // 若数量超过拾亿单位，提示
    }
    // eslint-disable-next-line no-var
    var tmpnewchar = "";
    // eslint-disable-next-line no-var
    var perchar: any = part[0].charAt(i);
    switch (perchar) {
      case "0":
        tmpnewchar = "零" + tmpnewchar;
        break;
      case "1":
        tmpnewchar = "壹" + tmpnewchar;
        break;
      case "2":
        tmpnewchar = "贰" + tmpnewchar;
        break;
      case "3":
        tmpnewchar = "叁" + tmpnewchar;
        break;
      case "4":
        tmpnewchar = "肆" + tmpnewchar;
        break;
      case "5":
        tmpnewchar = "伍" + tmpnewchar;
        break;
      case "6":
        tmpnewchar = "陆" + tmpnewchar;
        break;
      case "7":
        tmpnewchar = "柒" + tmpnewchar;
        break;
      case "8":
        tmpnewchar = "捌" + tmpnewchar;
        break;
      case "9":
        tmpnewchar = "玖" + tmpnewchar;
        break;
    }
    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + "元";
        break;
      case 1:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;
      case 2:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;
      case 3:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;
      case 4:
        tmpnewchar = tmpnewchar + "万";
        break;
      case 5:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;
      case 6:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;
      case 7:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;
      case 8:
        tmpnewchar = tmpnewchar + "亿";
        break;
      case 9:
        tmpnewchar = tmpnewchar + "拾";
        break;
    }
    // eslint-disable-next-line no-var, no-redeclare
    var newchar = tmpnewchar + newchar;
  }
  //  小数点之后进行转化
  if (Num.indexOf(".") != -1) {
    if (part[1].length > 2) {
      console.error("小数点之后只能保留两位,系统将自动截断");
      part[1] = part[1].substr(0, 2);
    }
    for (i = 0; i < part[1].length; i++) {
      tmpnewchar = "";
      perchar = part[1].charAt(i);
      switch (perchar) {
        case "0":
          tmpnewchar = "零" + tmpnewchar;
          break;
        case "1":
          tmpnewchar = "壹" + tmpnewchar;
          break;
        case "2":
          tmpnewchar = "贰" + tmpnewchar;
          break;
        case "3":
          tmpnewchar = "叁" + tmpnewchar;
          break;
        case "4":
          tmpnewchar = "肆" + tmpnewchar;
          break;
        case "5":
          tmpnewchar = "伍" + tmpnewchar;
          break;
        case "6":
          tmpnewchar = "陆" + tmpnewchar;
          break;
        case "7":
          tmpnewchar = "柒" + tmpnewchar;
          break;
        case "8":
          tmpnewchar = "捌" + tmpnewchar;
          break;
        case "9":
          tmpnewchar = "玖" + tmpnewchar;
          break;
      }
      if (i == 0) tmpnewchar = tmpnewchar + "角";
      if (i == 1) tmpnewchar = tmpnewchar + "分";
      newchar = newchar + tmpnewchar;
    }
  }
  // 替换所有无用汉字
  while (newchar.search("零零") != -1) {
    newchar = newchar.replace("零零", "零");
  }
  newchar = newchar.replace("零亿", "亿");
  newchar = newchar.replace("亿万", "亿");
  newchar = newchar.replace("零万", "万");
  newchar = newchar.replace("零元", "");
  newchar = newchar.replace("零角", "");
  newchar = newchar.replace("零分", "");
  // if (newchar.charAt(newchar.length - 1) == '元') {
  //   newchar = newchar + '整';
  // }
  return newchar;
};
