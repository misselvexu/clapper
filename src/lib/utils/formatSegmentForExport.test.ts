import { expect, test } from 'vitest'

import { formatSegmentForExport } from './formatSegmentForExport'
import { newSegment } from '@aitube/clap'

test('formatSegmentForExport', () => {
  expect(formatSegmentForExport(newSegment({
    id: "301a3e6f-cb59-4a85-afd6-4737eeeee356",
    createdAt: "2024-07-13T19:30:13.387Z",
    seed: 7549327,
    // I mean, we could add more fields, but it looks like it's
    // working properly anyway
  }), 0)).toStrictEqual({
    "assetSourceType": "EMPTY",
    "assetUrl": "",
    "category": "generic",
    "directory": "generic",
    "fileName": "shot_0000_301a3e6f-cb59-4a85-afd6-4737eeeee356.unknown",
    "filePath": "generic/shot_0000_301a3e6f-cb59-4a85-afd6-4737eeeee356.unknown",
    "format": "unknown",
    "index": 0,
    "isExportableToFile": false,
    "mimetype": "unknown/unknown",
    "prefix": "shot_0000_",
    "segment": {
      "assetDurationInMs": 1000,
      "assetFileFormat": "",
      "assetSourceType": "EMPTY",
      "assetUrl": "",
      "category": "generic",
      "createdAt": "2024-07-13T19:30:13.387Z",
      "createdBy": "ai",
      "editedBy": "ai",
      "endTimeInLines": 0,
      "endTimeInMs": 1000,
      "entityId": "",
      "id": "301a3e6f-cb59-4a85-afd6-4737eeeee356",
      "label": "",
      "outputGain": 0,
      "outputType": "text",
      "prompt": "",
      "renderId": "",
      "revision": 0,
      "sceneId": "",
      "seed": 7549327,
      "startTimeInLines": 0,
      "startTimeInMs": 0,
      "status": "to_generate",
      "track": 0,
    },
    "shortId": "generic0",
  })
})