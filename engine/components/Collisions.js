class Collisions {
    static isCollisionPointPolygon(point, gameObject) {
        //Move everything into worldspace
        let worldSpacePoints = []
        for (let point of gameObject.getComponent(Collider).points) {
            worldSpacePoints.push(
                new Vector2(
                gameObject.transform.getWorldMatrix().transformPoint(point).x,
                gameObject.transform.getWorldMatrix().transformPoint(point).y
            ))
        }
        //find axex for projection
        for (let i= 0; i < worldSpacePoints.length; i++) {
            let point1 = worldSpacePoints[i]
            let point2 = worldSpacePoints[(i+1) % worldSpacePoints.length]
            let edge = point2.minus(point1)
            let axis = edge.orthogonal()

            //check for overlap
            let pointProjection = point.dot(axis)
            let polygonProjections = worldSpacePoints.map(p=>p.dot(axis))
        
            if(pointProjection < Math.min(...polygonProjections) || pointProjection > Math.max(...polygonProjections))
                return false
        }
        return true
    }

    static isCollisionPolygonPolygon(gameObject, gameObject2) {
        //Move everything into worldspace
        let worldSpacePoints = []
        for (let point of gameObject.getComponent(Collider).points) {
            worldSpacePoints.push(
                new Vector2(
                gameObject.transform.getWorldMatrix().transformPoint(point).x,
                gameObject.transform.getWorldMatrix().transformPoint(point).y
            ))
        }

        let worldSpacePoints2 = []
        for (let point of gameObject2.getComponent(Collider).points) {
            worldSpacePoints2.push(
                new Vector2(
                gameObject2.transform.getWorldMatrix().transformPoint(point).x,
                gameObject2.transform.getWorldMatrix().transformPoint(point).y
            ))
        }
        //find axex for projection
        let axes = []
        for (let i= 0; i < worldSpacePoints.length; i++) {
            let point1 = worldSpacePoints[i]
            let point2 = worldSpacePoints[(i+1) % worldSpacePoints.length]
            let edge = point2.minus(point1)
            let axis = edge.orthogonal()
            axes.push(axis)
        }

        for (let i= 0; i < worldSpacePoints2.length; i++) {
            let point1 = worldSpacePoints2[i]
            let point2 = worldSpacePoints2[(i+1) % worldSpacePoints2.length]
            let edge = point2.minus(point1)
            let axis = edge.orthogonal()
            axes.push(axis)
        }

        for(const axis of axes) {

            //check for overlap
            let polygonProjections = worldSpacePoints.map(p=>p.dot(axis))
            let polygonProjections2 = worldSpacePoints2.map(p=>p.dot(axis))
        
            if(Math.max(...polygonProjections2) < Math.min(...polygonProjections) ||
            Math.min(...polygonProjections2) > Math.max(...polygonProjections))
                return false
        }
        return true
    }
}