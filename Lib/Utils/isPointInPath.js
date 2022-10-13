/**
 * 判断一个点是否在一个多边形内部 -- [射线法]
 * 只要判断点与多边形任意一侧的交点个数为奇数，则点在多边形内部。
 * 这个方法不限制多边形的类型，凸多边形、凹多边形甚至环形都可以。
*/

// 获取交叉点列表
const getCrossPointList = () => {
  let pointList = []
  getCrossPointCount((1, 2), pointList)
};

// 获取交叉点个数
const getCrossPointCount = (point, crossPointList) => {

let leftSide = 0;

const A = point;

for (let i = 0; i < crossPointList.length; i++) {

  let B, C;

  if (i === crossPointList.length - 1) {

    B = {

      x: crossPointList[i][0],

      y: crossPointList[i][1]

    };

    C = {

      x: crossPointList[0][0],

      y: crossPointList[0][1]

    };

  } else {

    B = {

      x: crossPointList[i][0],

      y: crossPointList[i][1]

    };

    C = {

      x: crossPointList[i + 1][0],

      y: crossPointList[i + 1][1]

    };

  }

  //判断左侧相交

  let sortByY = [B.y, C.y].sort((a,b) => a-b)

  if (sortByY[0] < A.y && sortByY[1] > A.y){

    if(B.x<A.x || C.x < A.x){

      leftSide++

    }

  }

}

return leftSide % 2 === 1

}