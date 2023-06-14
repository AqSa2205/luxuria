import './categoryItem.scss'

const CategoryItem = ({category}) =>  {
        const { imageUrl, title} = category

return(
        <div classname='category-container'>
        <div classname='background-image' style={
                {backgroundImage: `url(${imageUrl})`}
        }/>
        <div classname='category-body-container'>
                <h2>{title}</h2>
                <p>Shop now</p>
        </div>
        </div>
)
}

export default CategoryItem