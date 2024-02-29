import { client, publicSDK } from "@devrev/typescript-sdk";
import axios from "axios";
import { ApiUtils } from "./utils";
import {v4 as uuidv4} from 'uuid';

let myuuid = uuidv4();
const tagmap={
  "Bug":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/3",
  "Feature Request":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/2",
  "Question":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/8",
  "Others":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/10",
  "UI/UX improvements":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/13",
  "Aditional features":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/14",
  "Feature Upgrade":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/15",
  "Application crashes/freezes":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/16",
  "Functionality issues":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/17",
  "Data synchronization issues":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/18",
  "Application functionality":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/19",
  "Future updates":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/20",
  "Integration":"don:core:dvrv-us-1:devo/1vhOQMl5OO:tag/21"
}

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
    // const apiUrl='http://localhost:3000/'
let data =await fetchData(apiUrl)

    // Do something with the fetched data
    console.log(data)
    data=JSON.parse(data)
    // let dataobj=data.msg

    console.log(data[0])
    console.log(data[0]["parent_tag"]);
  
    // Handle any errors that occurred during the fetch

    // Create a ticket with title as review title and description as review text.
    for(let i=0;i<data.length;i++)
    {
    let body='';
    let parent_tagId=''
    // if(data[i]["parent_tag"]=="Bug")
    // {
    //   parent_tagId=tagmap["Bug"]
    // }
    // else if(data[i]["parent_tag"]=="Question")
    // {
    //   parent_tagId=tagmap["Question"]
    // }
    // else if(data[i]["parent_tag"]=="Feature Request")
    // {
    //   parent_tagId=tagmap["Feature Request"]
    // }
    // else if(data[i]["parent_tag"]=="Others")
    // {

    //   parent_tagId=tagmap["Others"]
    // }
    // else
    // {
    //   parent_tagId=tagmap["Others"]
    // }
    let tagIds=[];
    //@ts-ignore
    if(tagmap[data[i]["parent_tag"]])
    {
    //@ts-ignore
    tagIds.push({id: tagmap[data[i]["parent_tag"]]})
    }
    for( let[k,v] of Object.entries(data[i]["Reviews"]))
    {
      console.log(k,v);
      body+=k+":"+v+"\n";
    //   //@ts-ignore
    // if(tagmap[v[1]])
    // {
    //   //@ts-ignore
    //   tagIds.push({id: tagmap[v[1]]})
    // }
    // //@ts-ignore
    // if(tagmap[v[2]])
    // {
    //   //@ts-ignore
    //   tagIds.push({id: tagmap[v[2]]})
    // }
      

    }
    console.log(tagIds);
    // let uuid=uuidv4();
    const createTicketResp = await apiUtil.createTicket({
      title:data[i]["Summary"],
      // title: "Ticket create from https://play.google.com/store/apps/details?id=com.ludo.king&reviewId="+uuid,
      // data[0]["Summary"],
      // tags: [{id: tags[inferredCategory].id}],
      // tags:[{id:parent_tagId}],
      tags:tagIds,
      body: body,
      type: publicSDK.WorkType.Ticket,
      owned_by: ['don:identity:dvrv-us-1:devo/1vhOQMl5OO:devu/1'],
      applies_to_part: 'don:core:dvrv-us-1:devo/1vhOQMl5OO:capability/2',
    });
    if (!createTicketResp.success) {
      console.error(`Error while creating ticket: ${createTicketResp.message}`);
      
    }
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
