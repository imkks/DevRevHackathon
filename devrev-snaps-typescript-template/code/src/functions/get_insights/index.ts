import { client, publicSDK } from "@devrev/typescript-sdk";
import axios from "axios";
import { ApiUtils } from "./utils";
import {v4 as uuidv4} from 'uuid';

let myuuid = uuidv4();


export async function handleEvent(
  event: any,
) {
  const devrevPAT = event.context.secrets.service_account_token;
  // console.log(devrevPAT);
  const APIBase = event.execution_metadata.devrev_endpoint;
  const apiUtil: ApiUtils = new ApiUtils(APIBase, devrevPAT);
  // const devrevSDK = client.setup({
  //   endpoint: APIBase,
  //   token: devrevPAT,
  // })
  try {
    const apiUrl = 'http://ec2-13-60-32-246.eu-north-1.compute.amazonaws.com:3000/';
let data =await fetchData(apiUrl)

    // Do something with the fetched data
    console.log(data)
    data=JSON.parse(data)
    // let dataobj=data.msg

    console.log(data[0])
    console.log(data[0]["parent_tag"]);
  
    // Handle any errors that occurred during the fetch

    // Create a ticket with title as review title and description as review text.
    let body='';
    for( let[k,v] of Object.entries(data[0]["Reviews"]))
    {
      console.log(k,v);
      body+=k+":"+v+"\n";

    }
    console.log(body);
    let uuid=uuidv4();
    const createTicketResp = await apiUtil.createTicket({
      title: "Ticket create from https://play.google.com/store/apps/details?id=com.ludo.king&reviewId="+uuid,
      // data[0]["Summary"],
      // tags: [{id: tags[inferredCategory].id}],
      body: body,
      type: publicSDK.WorkType.Ticket,
      owned_by: ['don:identity:dvrv-us-1:devo/1vhOQMl5OO:devu/1'],
      applies_to_part: 'don:core:dvrv-us-1:devo/1vhOQMl5OO:capability/2',
    });
    if (!createTicketResp.success) {
      console.error(`Error while creating ticket: ${createTicketResp.message}`);
      
    }
    // Post a message with ticket ID.
    // const ticketID = createTicketResp.data.work.id;
    // const ticketCreatedMessage = inferredCategory != 'failed_to_infer_category' ? `Created ticket: <${ticketID}> and it is categorized as ${inferredCategory}` : `Created ticket: <${ticketID}> and it failed to be categorized`;
    // const postTicketResp: any  = await apiUtil.postTextMessageWithVisibilityTimeout(snapInId, ticketCreatedMessage, 1);
    // if (!postTicketResp.success) {
    //   console.error(`Error while creating timeline entry: ${postTicketResp.message}`);
    //   continue;

    // return response;
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const run = async (events: any[]) => {
  /*
  Put your code here to handle the event.
  */
//  console.log(events);
  for (let event of events) {
    await handleEvent(event);
  }
};
async function fetchData(myurl:any) {
  try {
    const response = await fetch(myurl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default run;
