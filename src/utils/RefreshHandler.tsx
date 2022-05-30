import { useEffect } from 'react';

import { useAuthorization } from 'hooks';

const RefreshHandler = () => {

    const { refreshHandler } = useAuthorization();

    useEffect(() => {
        refreshHandler()
    }, [])

    return null
}

export default RefreshHandler