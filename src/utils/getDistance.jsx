const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  }
  
  export const getDistance = (coords1, coords2) => {
    const R = 6371; // 지구의 반지름 (킬로미터)
  
    const dLat= toRadians(coords2.latitude - coords1.latitude);
    const dLon = toRadians(coords2.longitude - coords1.longitude);
  
    const a = Math.sin(dLat / 2) ** 2 +
      Math.cos(toRadians(coords1.latitude)) * Math.cos(toRadians(coords2.latitude))
      * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c; // 두 점 간의 거리 (킬로미터)
  }
