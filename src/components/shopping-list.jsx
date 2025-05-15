import ListItem from './list-item'

const ShoppingList = ({ data, onDelete, onToggleActive }) => {
	return (
		<div className='shopping-list'>
			{data.length ? (
				data.map(item => (
					<ListItem
						item={item}
						key={item.id}
						onDeleteItem={() => onDelete(item.id)}
						onToggleActiveItem={() => onToggleActive(item.id)}
					/>
				))
			) : (
				<h1 style={{ textAlign: 'center', color: '#fff' }}>Not Found Data</h1>
			)}
		</div>
	)
}

export default ShoppingList
