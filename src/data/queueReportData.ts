type QueueReportDataType = {
    id:number
    startPeriod: string
    endPeriod: string
    queue: "Видеотерминалы" | "GSM" | "39-48-75" | "39-25-47" | "151 Other" | "151 GSM" | "151 Beltelecom"
        | "105 Other" | "105 GSM" | "105 Beltelecom"
    totalCall: number
    percentageReceivedCalls: number
    serviceLevel: number
    totalSkipped: number
    skippedLess5s: number
    skippedLess10s: number
    skippedLess20s: number
    skippedLess30s: number
    skippedLess1m: number
    skippedLess2m: number
    skippedMore2m: number
    totalAccept: number
    acceptLess5s: number
    acceptLess10s: number
    acceptLess20s: number
    acceptLess30s: number
    acceptLess1m: number
    acceptLess2m: number
    acceptMore2m: number
    avgCallDuration: string
    maxCallDuration: string
    avgWaitingTimeLostCall: string
    maxWaitingTimeLostCall: string
    avgWaitingTimeReceivedCall: string
    maxWaitingTimeReceivedCall: string
    avgTalkTime: string
    maxTalkTime: string
}
export const queueReportData:QueueReportDataType[] = [
    {
        id:1,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "105 GSM",
        totalCall: 200,
        percentageReceivedCalls: 96,
        serviceLevel: 92,
        totalSkipped: 10,
        skippedLess5s: 5,
        skippedLess10s: 0,
        skippedLess20s: 0,
        skippedLess30s: 1,
        skippedLess1m: 0,
        skippedLess2m: 1,
        skippedMore2m: 1,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 0,
        acceptLess20s: 0,
        acceptLess30s: 0,
        acceptLess1m: 0,
        acceptLess2m: 9,
        acceptMore2m: 9,
        avgCallDuration: "10:02:11",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:2,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "105 Beltelecom",
        totalCall: 584,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 12,
        skippedLess5s: 5,
        skippedLess10s: 0,
        skippedLess20s: 1,
        skippedLess30s: 1,
        skippedLess1m: 2,
        skippedLess2m: 2,
        skippedMore2m: 1,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 0,
        acceptLess20s: 9,
        acceptLess30s: 9,
        acceptLess1m: 9,
        acceptLess2m: 9,
        acceptMore2m: 0,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:3,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "39-25-47",
        totalCall: 214,
        percentageReceivedCalls: 98,
        serviceLevel: 97,
        totalSkipped: 5,
        skippedLess5s: 1,
        skippedLess10s: 0,
        skippedLess20s: 0,
        skippedLess30s: 0,
        skippedLess1m: 2,
        skippedLess2m: 2,
        skippedMore2m: 0,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 9,
        acceptLess20s: 0,
        acceptLess30s: 9,
        acceptLess1m: 0,
        acceptLess2m: 0,
        acceptMore2m: 9,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:4,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "105 GSM",
        totalCall: 584,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 0,
        skippedLess5s: 0,
        skippedLess10s: 0,
        skippedLess20s: 0,
        skippedLess30s: 0,
        skippedLess1m: 0,
        skippedLess2m: 0,
        skippedMore2m: 0,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 9,
        acceptLess20s: 0,
        acceptLess30s: 9,
        acceptLess1m: 9,
        acceptLess2m: 0,
        acceptMore2m: 9,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:5,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "Видеотерминалы",
        totalCall: 292,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 9,
        skippedLess5s: 5,
        skippedLess10s: 0,
        skippedLess20s: 0,
        skippedLess30s: 1,
        skippedLess1m: 2,
        skippedLess2m: 0,
        skippedMore2m: 1,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 0,
        acceptLess20s: 9,
        acceptLess30s: 9,
        acceptLess1m: 0,
        acceptLess2m: 0,
        acceptMore2m: 9,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:6,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "39-48-75",
        totalCall: 120,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 2,
        skippedLess5s: 0,
        skippedLess10s: 0,
        skippedLess20s: 0,
        skippedLess30s: 0,
        skippedLess1m: 0,
        skippedLess2m: 3,
        skippedMore2m: 0,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 0,
        acceptLess20s: 0,
        acceptLess30s: 0,
        acceptLess1m: 9,
        acceptLess2m: 9,
        acceptMore2m: 9,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:7,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "GSM",
        totalCall: 584,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 12,
        skippedLess5s: 5,
        skippedLess10s: 0,
        skippedLess20s: 1,
        skippedLess30s: 1,
        skippedLess1m: 2,
        skippedLess2m: 2,
        skippedMore2m: 1,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 0,
        acceptLess20s: 9,
        acceptLess30s: 9,
        acceptLess1m: 9,
        acceptLess2m: 0,
        acceptMore2m: 0,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:8,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "151 Beltelecom",
        totalCall: 584,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 12,
        skippedLess5s: 5,
        skippedLess10s: 0,
        skippedLess20s: 1,
        skippedLess30s: 1,
        skippedLess1m: 2,
        skippedLess2m: 2,
        skippedMore2m: 1,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 9,
        acceptLess20s: 0,
        acceptLess30s: 0,
        acceptLess1m: 0,
        acceptLess2m: 9,
        acceptMore2m: 9,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:9,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "151 Other",
        totalCall: 584,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 12,
        skippedLess5s: 5,
        skippedLess10s: 0,
        skippedLess20s: 1,
        skippedLess30s: 0,
        skippedLess1m: 2,
        skippedLess2m: 0,
        skippedMore2m: 1,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 0,
        acceptLess20s: 0,
        acceptLess30s: 9,
        acceptLess1m: 9,
        acceptLess2m: 9,
        acceptMore2m: 0,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:10,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "105 GSM",
        totalCall: 584,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 12,
        skippedLess5s: 5,
        skippedLess10s: 0,
        skippedLess20s: 0,
        skippedLess30s: 0,
        skippedLess1m: 0,
        skippedLess2m: 0,
        skippedMore2m: 1,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 0,
        acceptLess20s: 9,
        acceptLess30s: 0,
        acceptLess1m: 9,
        acceptLess2m: 0,
        acceptMore2m: 9,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:11,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "105 Other",
        totalCall: 584,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 2,
        skippedLess5s: 0,
        skippedLess10s: 0,
        skippedLess20s: 0,
        skippedLess30s: 0,
        skippedLess1m: 0,
        skippedLess2m: 2,
        skippedMore2m: 0,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 9,
        acceptLess20s: 0,
        acceptLess30s: 2,
        acceptLess1m: 0,
        acceptLess2m: 0,
        acceptMore2m: 9,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:12,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "105 Beltelecom",
        totalCall: 584,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 12,
        skippedLess5s: 0,
        skippedLess10s: 0,
        skippedLess20s: 1,
        skippedLess30s: 0,
        skippedLess1m: 0,
        skippedLess2m: 2,
        skippedMore2m: 1,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 0,
        acceptLess20s: 9,
        acceptLess30s: 0,
        acceptLess1m: 0,
        acceptLess2m: 0,
        acceptMore2m: 9,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:13,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "151 GSM",
        totalCall: 584,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 12,
        skippedLess5s: 5,
        skippedLess10s: 0,
        skippedLess20s: 0,
        skippedLess30s: 0,
        skippedLess1m: 0,
        skippedLess2m: 2,
        skippedMore2m: 1,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 0,
        acceptLess20s: 9,
        acceptLess30s: 0,
        acceptLess1m: 9,
        acceptLess2m: 0,
        acceptMore2m: 9,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:14,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "151 Other",
        totalCall: 224,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 8,
        skippedLess5s: 5,
        skippedLess10s: 0,
        skippedLess20s: 1,
        skippedLess30s: 1,
        skippedLess1m: 2,
        skippedLess2m: 2,
        skippedMore2m: 1,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 9,
        acceptLess20s: 9,
        acceptLess30s: 0,
        acceptLess1m: 0,
        acceptLess2m: 9,
        acceptMore2m: 0,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:15,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "105 GSM",
        totalCall: 501,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 12,
        skippedLess5s: 0,
        skippedLess10s: 1,
        skippedLess20s: 1,
        skippedLess30s: 3,
        skippedLess1m: 2,
        skippedLess2m: 0,
        skippedMore2m: 0,
        totalAccept: 572,
        acceptLess5s: 521,
        acceptLess10s: 9,
        acceptLess20s: 0,
        acceptLess30s: 0,
        acceptLess1m: 9,
        acceptLess2m: 9,
        acceptMore2m: 0,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    },
    {
        id:16,
        startPeriod: "04.03.23 00:00",
        endPeriod: "05.03.23 00:00",
        queue: "105 GSM",
        totalCall: 584,
        percentageReceivedCalls: 98,
        serviceLevel: 92,
        totalSkipped: 12,
        skippedLess5s: 5,
        skippedLess10s: 2,
        skippedLess20s: 1,
        skippedLess30s: 0,
        skippedLess1m: 2,
        skippedLess2m: 0,
        skippedMore2m: 1,
        totalAccept: 562,
        acceptLess5s: 560,
        acceptLess10s: 2,
        acceptLess20s:0,
        acceptLess30s: 9,
        acceptLess1m: 0,
        acceptLess2m: 0,
        acceptMore2m: 9,
        avgCallDuration: "00:02:00",
        maxCallDuration: "00:01:00",
        avgWaitingTimeLostCall: "00:00:00",
        maxWaitingTimeLostCall: "00:01:00",
        avgWaitingTimeReceivedCall: "00:20:00",
        maxWaitingTimeReceivedCall: "00:03:00",
        avgTalkTime: "00:00:00",
        maxTalkTime: "00:03:00",
    }
]