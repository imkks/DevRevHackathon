import { testRunner } from '../../test-runner/test-runner';
import { client } from '@devrev/typescript-sdk';
import { handleEvent } from '.';

jest.mock('@devrev/typescript-sdk', () => ({
  client: {
    setup: jest.fn(),
  },
  publicSDK: {
    WorkType: {
      Ticket: 'ticket',
    },
  },
}));

describe('Example Index Test file', () => {
  it('Testing handleEvent', async () => {
    const mockSetup = jest.fn();
    client.setup = mockSetup;
    const mockWorkList = jest.fn();
    mockSetup.mockReturnValue({
      worksList: mockWorkList,
    });
    mockWorkList.mockReturnValue({
      data: {
        works: [
          {
            id: '123',
          },
        ],
      },
    });
    const event = {
      payload: {
        work_created: {
          work: {
            id: '123',
          },
        },
      },
      context: {
        secrets: {
          service_account_token: 'eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzF2aE9RTWw1T086c3lzdS8xIiwiZXhwIjoxNzA4ODY3MjUyLCJodHRwOi8vZGV2cmV2LmFpL2FhdF9hbGxvd19saXN0ZWQiOnRydWUsImh0dHA6Ly9kZXZyZXYuYWkvY2xpZW50aWQiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vMXZoT1FNbDVPTzpzdmNhY2MvMTYiLCJodHRwOi8vZGV2cmV2LmFpL2Rldm9fZG9uIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzF2aE9RTWw1T08iLCJodHRwOi8vZGV2cmV2LmFpL2Rldm9pZCI6IkRFVi0xdmhPUU1sNU9PIiwiaHR0cDovL2RldnJldi5haS9zdmNhY2MiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vMXZoT1FNbDVPTzpzdmNhY2MvMTYiLCJodHRwOi8vZGV2cmV2LmFpL3Rva2VudHlwZSI6InVybjpkZXZyZXY6cGFyYW1zOm9hdXRoOnRva2VuLXR5cGU6YWF0IiwiaWF0IjoxNzA4ODY1NDUyLCJpc3MiOiJodHRwczovL2F1dGgtdG9rZW4uZGV2cmV2LmFpLyIsImp0aSI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xdmhPUU1sNU9POnRva2VuL2tHcEJkclpQIiwic3ViIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzF2aE9RTWw1T086c3ZjYWNjLzE2In0.NssUIJjih-ZHaG_4aSw-8uedDIqXmSaXyq3DUpokwbUg8YjWx1QK7Hv8Np3Bac_CDlddjRDkeTW1rdA0Mq0t2VjkG8RumBYEZr-24H3PjWYq55PeonrVqaMmW4dZQxaTAEQSNyDJFImTdsf6-gnAZchqfB_7CL8zb5k-G5E5LSKDhtKAFXQ6YG15yDGctlP3-AKbOM6Mq4YVcoYIZN_4OlX9Q7uor3XDs4_CqBr4i1f9q7ePpSbFSlAqnzHcOxE9L5tLZfTJ_oO8Dh3tpQAbGy_MjL4V7yjshKmhblctJK6w5OwjCmD3wSUaClwBSIv5OXEXOeJpu0E6mu3oZAQn-A',
        },
      },
      execution_metadata: {
        devrev_endpoint: 'https://devrev.com',
      },
    };
    const expectedResp = {
      works: [
        {
          id: '123',
        },
      ],
    };
    const response = await handleEvent(event);
    expect(response).toEqual(expectedResp);
  });
});

describe('Example Index Test file', () => {
  it('Testing the method', () => {
    testRunner({
      fixturePath: 'on_work_created_event.json',
      functionName: 'get_insights',
    });
  });
});
