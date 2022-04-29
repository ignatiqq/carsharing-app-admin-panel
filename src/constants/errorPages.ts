interface IErrorData {
    statusCode: number,
    title: string,
    description: string
}

interface IErrorPages {
    [key: string]: IErrorData
}

const errorPages: IErrorPages = {
    notFound: {
        statusCode: 404,
        title: "Страница не найдена",
        description: "Упс... Такой страницы не существует"
    }
}

export default errorPages;