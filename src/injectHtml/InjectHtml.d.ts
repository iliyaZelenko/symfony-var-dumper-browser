declare type HTML = string;
declare const _default: (html: string, serverPort: number) => string;
export default _default;
/**
 * Обрабатывает новый HTML который пришел после обновления файла.
 * @param {string} html контент файла
 * @return {HTML | null}
 */
export declare function processUpdatedHtml(html: string): HTML | null;
/**
 * Возвращает количество сообщений на странице (article)
 * @param {HTML} [html]
 * @return {number}
 */
export declare function getArticlesCount(html?: HTML): number;
