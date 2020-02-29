/**
 * 省
 * */
function provinceData() {
  var arr = [
    // {pid:1,pzip:'110000',pname:'北京市'},
    // {pid:2,pzip:'120000',pname:'天津市'}
    '请选择省份', '上海市'
  ]
  return arr
}
/**
 * 市
 * */
function cityData() {
  var arr = [
    // {cid:1,czip:'110100',cname:'市辖区',pzip:'110000'},
    // {cid:2,czip:'120100',cname:'市辖区',pzip:'120000'}
    '请选择城市', '静安区', '徐汇区', '奉贤区','宝山区', '长宁区', '虹口区'
  ]
  return arr
}
/*
 * 对外暴露接口
 */
module.exports = {
  provinceData: provinceData,
  cityData: cityData,
}