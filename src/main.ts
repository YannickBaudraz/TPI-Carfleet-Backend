/*
 * Description  :   Entry point of the app
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - main.ts
 *
 * Created      :   12.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { Server } from './app/Server/Server';

const PORT = 3000;

const server = Server.init(PORT);
server.listen(() => console.log(`Example app listening at http://localhost:${PORT}`));
