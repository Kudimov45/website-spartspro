export default function getProductCard(productData) {

  let status = '';
  let classStatus = '';
  
  if(productData.availability){
    status = 'В наличии 50 м.';
    classStatus = 'recommendation-card__indicator--active';
  } else {
    status = 'Под заказ';
    classStatus = 'recommendation-card__indicator--disactive';
  }

  const cardHtml = `
    <div class="recommendation-card">
      <img class="recommendation-card__img" src=${productData.image} width="220" height="220" alt="Изображение каната">
      <div class="recommendation-card__wrapper-info">
        <p class="recommendation-card__name">${productData.name}</p>
        <div class="recommendation-card__wrapper">
          <div class="recommendation-card__inner">
            <div class="recommendation-card__indicator ${classStatus}">
              <svg class="recommendation-card__icon" width="6" height="7" aria-hidden="true">
                <use xlink:href="images/sprite.svg#icon-check"></use>
              </svg>
            </div>
            <span class="recommendation-card__status">${status}</span>
          </div>
          <a class="recommendation-card__link btn" href="#">Подробнее</a>
        </div>  
      </div>
    </div>
`;
  return cardHtml;

}