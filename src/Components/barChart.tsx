// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ResponsiveBar } from '@nivo/bar';
// import seifaService from '../Service/seifaService';
// import { ISeifa2011 } from './Models/seifa2011';

import { ResponsiveBar } from '@nivo/bar';
const BarChart = () => {
  const data = [
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Alpine (S)',
      RelativeDisadvantage: 987,
      RelativeAdvantage: 970,
      SeifaId: 154
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Ararat (RC)',
      RelativeDisadvantage: 951,
      RelativeAdvantage: 938,
      SeifaId: 155
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Ballarat (C)',
      RelativeDisadvantage: 981,
      RelativeAdvantage: 969,
      SeifaId: 156
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Banyule (C)',
      RelativeDisadvantage: 1047,
      RelativeAdvantage: 1044,
      SeifaId: 157
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Bass Coast (S)',
      RelativeDisadvantage: 978,
      RelativeAdvantage: 960,
      SeifaId: 158
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Baw Baw (S)',
      RelativeDisadvantage: 998,
      RelativeAdvantage: 983,
      SeifaId: 159
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Bayside (C)',
      RelativeDisadvantage: 1091,
      RelativeAdvantage: 1108,
      SeifaId: 160
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Benalla (RC)',
      RelativeDisadvantage: 957,
      RelativeAdvantage: 945,
      SeifaId: 161
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Boroondara (C)',
      RelativeDisadvantage: 1098,
      RelativeAdvantage: 1114,
      SeifaId: 162
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Brimbank (C)',
      RelativeDisadvantage: 926,
      RelativeAdvantage: 932,
      SeifaId: 163
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Buloke (S)',
      RelativeDisadvantage: 968,
      RelativeAdvantage: 951,
      SeifaId: 164
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Campaspe (S)',
      RelativeDisadvantage: 964,
      RelativeAdvantage: 947,
      SeifaId: 165
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Cardinia (S)',
      RelativeDisadvantage: 1024,
      RelativeAdvantage: 1008,
      SeifaId: 166
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Casey (C)',
      RelativeDisadvantage: 1006,
      RelativeAdvantage: 997,
      SeifaId: 167
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Central Goldfields (S)',
      RelativeDisadvantage: 905,
      RelativeAdvantage: 888,
      SeifaId: 168
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Colac-Otway (S)',
      RelativeDisadvantage: 965,
      RelativeAdvantage: 946,
      SeifaId: 169
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Corangamite (S)',
      RelativeDisadvantage: 986,
      RelativeAdvantage: 970,
      SeifaId: 170
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Darebin (C)',
      RelativeDisadvantage: 990,
      RelativeAdvantage: 995,
      SeifaId: 171
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'East Gippsland (S)',
      RelativeDisadvantage: 958,
      RelativeAdvantage: 942,
      SeifaId: 172
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Frankston (C)',
      RelativeDisadvantage: 997,
      RelativeAdvantage: 983,
      SeifaId: 173
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Gannawarra (S)',
      RelativeDisadvantage: 959,
      RelativeAdvantage: 940,
      SeifaId: 174
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Glen Eira (C)',
      RelativeDisadvantage: 1069,
      RelativeAdvantage: 1074,
      SeifaId: 175
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Glenelg (S)',
      RelativeDisadvantage: 960,
      RelativeAdvantage: 943,
      SeifaId: 176
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Golden Plains (S)',
      RelativeDisadvantage: 1030,
      RelativeAdvantage: 1011,
      SeifaId: 177
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Greater Bendigo (C)',
      RelativeDisadvantage: 983,
      RelativeAdvantage: 967,
      SeifaId: 178
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Greater Dandenong (C)',
      RelativeDisadvantage: 895,
      RelativeAdvantage: 905,
      SeifaId: 179
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Greater Geelong (C)',
      RelativeDisadvantage: 993,
      RelativeAdvantage: 980,
      SeifaId: 180
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Greater Shepparton (C)',
      RelativeDisadvantage: 952,
      RelativeAdvantage: 942,
      SeifaId: 181
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Hepburn (S)',
      RelativeDisadvantage: 980,
      RelativeAdvantage: 967,
      SeifaId: 182
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Hindmarsh (S)',
      RelativeDisadvantage: 947,
      RelativeAdvantage: 929,
      SeifaId: 183
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Hobsons Bay (C)',
      RelativeDisadvantage: 1002,
      RelativeAdvantage: 1000,
      SeifaId: 184
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Horsham (RC)',
      RelativeDisadvantage: 987,
      RelativeAdvantage: 971,
      SeifaId: 185
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Hume (C)',
      RelativeDisadvantage: 952,
      RelativeAdvantage: 950,
      SeifaId: 186
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Indigo (S)',
      RelativeDisadvantage: 1010,
      RelativeAdvantage: 997,
      SeifaId: 187
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Kingston (C)',
      RelativeDisadvantage: 1038,
      RelativeAdvantage: 1034,
      SeifaId: 188
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Knox (C)',
      RelativeDisadvantage: 1049,
      RelativeAdvantage: 1039,
      SeifaId: 189
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Latrobe (C)',
      RelativeDisadvantage: 940,
      RelativeAdvantage: 929,
      SeifaId: 190
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Loddon (S)',
      RelativeDisadvantage: 934,
      RelativeAdvantage: 926,
      SeifaId: 191
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Macedon Ranges (S)',
      RelativeDisadvantage: 1055,
      RelativeAdvantage: 1047,
      SeifaId: 192
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Manningham (C)',
      RelativeDisadvantage: 1071,
      RelativeAdvantage: 1081,
      SeifaId: 193
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Mansfield (S)',
      RelativeDisadvantage: 1012,
      RelativeAdvantage: 992,
      SeifaId: 194
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Maribyrnong (C)',
      RelativeDisadvantage: 974,
      RelativeAdvantage: 988,
      SeifaId: 195
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Maroondah (C)',
      RelativeDisadvantage: 1044,
      RelativeAdvantage: 1034,
      SeifaId: 196
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Melbourne (C)',
      RelativeDisadvantage: 1026,
      RelativeAdvantage: 1051,
      SeifaId: 197
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Melton (S)',
      RelativeDisadvantage: 1002,
      RelativeAdvantage: 993,
      SeifaId: 198
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Mildura (RC)',
      RelativeDisadvantage: 935,
      RelativeAdvantage: 924,
      SeifaId: 199
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Mitchell (S)',
      RelativeDisadvantage: 996,
      RelativeAdvantage: 979,
      SeifaId: 200
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Moira (S)',
      RelativeDisadvantage: 952,
      RelativeAdvantage: 936,
      SeifaId: 201
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Monash (C)',
      RelativeDisadvantage: 1045,
      RelativeAdvantage: 1054,
      SeifaId: 202
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Moonee Valley (C)',
      RelativeDisadvantage: 1027,
      RelativeAdvantage: 1031,
      SeifaId: 203
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Moorabool (S)',
      RelativeDisadvantage: 1008,
      RelativeAdvantage: 995,
      SeifaId: 204
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Moreland (C)',
      RelativeDisadvantage: 998,
      RelativeAdvantage: 1000,
      SeifaId: 205
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Mornington Peninsula (S)',
      RelativeDisadvantage: 1023,
      RelativeAdvantage: 1011,
      SeifaId: 206
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Mount Alexander (S)',
      RelativeDisadvantage: 983,
      RelativeAdvantage: 970,
      SeifaId: 207
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Moyne (S)',
      RelativeDisadvantage: 1017,
      RelativeAdvantage: 1005,
      SeifaId: 208
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Murrindindi (S)',
      RelativeDisadvantage: 997,
      RelativeAdvantage: 982,
      SeifaId: 209
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Nillumbik (S)',
      RelativeDisadvantage: 1098,
      RelativeAdvantage: 1099,
      SeifaId: 210
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Northern Grampians (S)',
      RelativeDisadvantage: 938,
      RelativeAdvantage: 926,
      SeifaId: 211
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Port Phillip (C)',
      RelativeDisadvantage: 1066,
      RelativeAdvantage: 1077,
      SeifaId: 212
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Pyrenees (S)',
      RelativeDisadvantage: 940,
      RelativeAdvantage: 930,
      SeifaId: 213
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Queenscliffe (B)',
      RelativeDisadvantage: 1053,
      RelativeAdvantage: 1047,
      SeifaId: 214
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'South Gippsland (S)',
      RelativeDisadvantage: 1000,
      RelativeAdvantage: 981,
      SeifaId: 215
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Southern Grampians (S)',
      RelativeDisadvantage: 994,
      RelativeAdvantage: 978,
      SeifaId: 216
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Stonnington (C)',
      RelativeDisadvantage: 1084,
      RelativeAdvantage: 1098,
      SeifaId: 217
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Strathbogie (S)',
      RelativeDisadvantage: 970,
      RelativeAdvantage: 956,
      SeifaId: 218
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Surf Coast (S)',
      RelativeDisadvantage: 1066,
      RelativeAdvantage: 1060,
      SeifaId: 219
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Swan Hill (RC)',
      RelativeDisadvantage: 950,
      RelativeAdvantage: 939,
      SeifaId: 220
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Towong (S)',
      RelativeDisadvantage: 996,
      RelativeAdvantage: 982,
      SeifaId: 221
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Wangaratta (RC)',
      RelativeDisadvantage: 981,
      RelativeAdvantage: 965,
      SeifaId: 222
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Warrnambool (C)',
      RelativeDisadvantage: 989,
      RelativeAdvantage: 970,
      SeifaId: 223
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Wellington (S)',
      RelativeDisadvantage: 974,
      RelativeAdvantage: 961,
      SeifaId: 224
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'West Wimmera (S)',
      RelativeDisadvantage: 986,
      RelativeAdvantage: 977,
      SeifaId: 225
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Whitehorse (C)',
      RelativeDisadvantage: 1051,
      RelativeAdvantage: 1057,
      SeifaId: 226
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Whittlesea (C)',
      RelativeDisadvantage: 989,
      RelativeAdvantage: 983,
      SeifaId: 227
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Wodonga (RC)',
      RelativeDisadvantage: 975,
      RelativeAdvantage: 963,
      SeifaId: 228
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Wyndham (C)',
      RelativeDisadvantage: 1013,
      RelativeAdvantage: 1007,
      SeifaId: 229
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Yarra (C)',
      RelativeDisadvantage: 1019,
      RelativeAdvantage: 1042,
      SeifaId: 230
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Yarra Ranges (S)',
      RelativeDisadvantage: 1037,
      RelativeAdvantage: 1022,
      SeifaId: 231
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Yarriambiack (S)',
      RelativeDisadvantage: 952,
      RelativeAdvantage: 943,
      SeifaId: 232
    },
    {
      LocalGovtAreas: 'Victoria',
      Locations: 'Unincorporated Vic',
      RelativeDisadvantage: 1019,
      RelativeAdvantage: 1017,
      SeifaId: 233
    }
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={['RelativeDisadvantage', 'RelativeAdvantage']}
      indexBy="Locations"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      layout="vertical"
      groupMode="grouped"
      defs={[
        {
          id: 'disadvantage',
          background: 'inherit',
          color: '#ff7f0e',
          lineWidth: 4,
          spacing: 10
        },
        {
          id: 'advantage',
          background: 'inherit',
          color: '#1f77b4',
          lineWidth: 4,
          spacing: 10
        }
      ]}
      fill={[
        { match: { id: 'RelativeDisadvantage' }, id: 'disadvantage' },
        { match: { id: 'RelativeAdvantage' }, id: 'advantage' }
      ]}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Locations',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Relative Disadvantage/Advantage',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      enableGridX={true}
      enableGridY={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      animate={true}
    />
  );
};

export default BarChart;
