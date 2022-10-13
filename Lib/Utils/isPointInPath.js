/**
 * 判断一个点是否在一个多边形内部 -- [射线法]
 * 只要判断点与多边形任意一侧的交点个数为奇数，则点在多边形内部。
 * 这个方法不限制多边形的类型，凸多边形、凹多边形甚至环形都可以。
*/
containsPoint
_findCrossPoints
_getImageLines
_getCoords

// 获取交叉点列表
const getCrossPointList = () => {
  let pointList = []
  getCrossPointCount((1, 2), pointList)
};

/**
 * 获取交叉点个数
 * 过检测点做水平射线，计算交叉点个数判断检测点是否在路径内
 * @param {[x, y]} point: 待检测点
 * @param {} lines: 路径集合，包括每一条线的起点和终点
*/
const getCrossPointCount = (point, lines) => {
  let leftCount = 0;
  for (let i = 0; i < lines.length; i += 1) {
    // start、end是多边形某条边的起点和终点
    const { start, end } = lines[i]; 
    // 起点和终点位于水平射线的两侧才会有交点 ^异或
    if ((start.y > point.y) ^ (end.y > point.y)) {
      // 点斜式直线方程: k = (y - y0) / (x - x0)
      // 根据该边计算k值带入求得交叉点的水平坐标
      const x = (point.y - start.y) * (end.x - start.x) / (end.y - start.y) + start.x;
      if (x < point.x) {
        leftCount += 1;
      }
    }
  }
  return leftCount;
}