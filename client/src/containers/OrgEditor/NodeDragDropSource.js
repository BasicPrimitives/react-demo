import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import useStyles from  './styles';
import primitives from 'basicprimitives';

const ItemTypes = {
    NODE: 'node'
}

export default function NodeDragDropSource({ itemConfig, canDropItem, onDropItem, isDragging }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: ItemTypes.NODE, id: itemConfig.id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })
  const [, drop] = useDrop({ 
        accept: ItemTypes.NODE,
        drop(item, monitor) {
            const didDrop = monitor.didDrop();
            if (didDrop && item.id === itemConfig.id) {
                return;
            }
            onDropItem(item.id, itemConfig.id);
        },
        canDrop(item, monitor) {
            return canDropItem(item.id, itemConfig.id);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),      
    })
  const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : primitives.common.Colors.RoyalBlue;
  const styles = useStyles();
  return (
    <div ref={drop} style = {{width: "100%", height: "100%"}}>
        <div ref={dragRef} style={{ opacity }} className={styles.DefaultTemplate}>
            <div key="title" className={styles.DefaultTitleBackground} style={{ backgroundColor: itemTitleColor }}>
                <div className={styles.DefaultTitle}>{itemConfig.title}</div>
            </div>
            <div key="photo" className={styles.DefaultPhotoFrame}>
                <img className={styles.DefaultPhoto} src={itemConfig.image} alt={itemConfig.title} />
            </div>
            <div key="description" className={styles.DefaultDescription}>{itemConfig.description}</div>
        </div>
    </div>
  )
}