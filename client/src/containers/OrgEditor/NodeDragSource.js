import React from 'react'
import { useDrag } from 'react-dnd'
import useStyles from  './styles';
import { Colors } from 'basicprimitives';

const ItemTypes = {
    NODE: 'node'
}

export default function NodeDragSource({ itemConfig }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: ItemTypes.NODE, id: itemConfig.id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })
  const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
  const styles = useStyles();
  return (
    <div style = {{width: "100%", height: "100%"}}>
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