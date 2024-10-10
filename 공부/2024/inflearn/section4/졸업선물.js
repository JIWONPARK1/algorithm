/**
 * 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
 * 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다.
 * 선생님이 가지고 있는 예산은 한정되어 있습니다.
 * 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
 * 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.
 *
 * ▣ 입력설명
 * 첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다.
 * 두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다. 상품가격과 배송비는 각각 100,000을 넘지 않습니다.
 * 상품가격은 짝수로만 입력됩니다.
 *
 * ▣ 출력설명
 * 첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다. 선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.
 */

function solution(m, product) {
  let parseList = [];
  let i = 0;
  let limit = m;
  let result1 = 0;
  let result2 = 1;

  parseList = product.map((e, i) => ({
    total: e[0] + e[1],
    productPrice: e[0],
    deliveryPrice: e[1],
    discountPrice: e[0] / 2 + e[1],
    gap: e[0] + e[1] - (e[0] / 2 + e[1]),
  }));

  // case1 :  총합이 낮은 순서대로 조합하기
  const sortedTotals = parseList.sort((a, b) => a.total - b.total);

  while (limit >= sortedTotals[i].total) {
    result1++;
    limit -= sortedTotals[i].total;
    i++;
  }

  const lastItem = sortedTotals[i];
  if (lastItem) {
    const lastItemTotal = lastItem.productPrice / 2 + lastItem.deliveryPrice;
    if (limit >= lastItemTotal) {
      result1++;
    }
  }

  // case2 :  할인율이 높은 것을 먼저 제하고 총합이 낮은 순서대로 제하기
  let sortedDiscounts = parseList.sort((a, b) => b.gap - a.gap);
  limit = m - sortedDiscounts[0].discountPrice;
  sortedDiscounts.shift();
  i = 0;
  sortedDiscounts = sortedDiscounts.sort((a, b) => a.total - b.total);

  while (limit >= sortedDiscounts[i]?.total) {
    result2++;
    limit -= sortedDiscounts[i].total;
    i++;
  }
  return result1 > result2 ? result1 : result2;
}

console.log(
  solution(596, [
    [57, 3],
    [85, 3],
    [61, 3],
    [98, 3],
    [85, 4],
    [47, 3],
    [42, 4],
    [95, 3],
    [85, 3],
    [82, 3],
    [41, 4],
    [64, 4],
    [36, 4],
    [100, 4],
    [66, 3],
  ])
);
