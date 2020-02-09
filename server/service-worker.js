/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/discordapps.dev/1f1e6-1f1e8.42822809.svg","ce540ee7717eb2e93a07313ee897c9eb"],["/discordapps.dev/1f1e6-1f1e9.0ea5bf62.svg","03edda8fc710082317dc192b7988f368"],["/discordapps.dev/1f1e6-1f1ea.547f1fed.svg","1e0f8ea8b39c7c12501b0a0deda991a6"],["/discordapps.dev/1f1e6-1f1eb.4d61ccd4.svg","46fecbc0b0e0c44d1171b20a5f2cae44"],["/discordapps.dev/1f1e6-1f1ec.046288e0.svg","e0f5696c968c0c55a171b7a06d176bed"],["/discordapps.dev/1f1e6-1f1ee.0ea90be6.svg","90dc2197923497786683b1450e275250"],["/discordapps.dev/1f1e6-1f1f1.93972240.svg","d2504bd52ecf3946c9bfc0ef5e797e3c"],["/discordapps.dev/1f1e6-1f1f2.58216aad.svg","be7d5f1c6163091f9d2487a065e9dffb"],["/discordapps.dev/1f1e6-1f1f4.1c7f2191.svg","3442c32e82d34c1e193ce979ca575b75"],["/discordapps.dev/1f1e6-1f1f6.1df3fa89.svg","70454ad4b759ce057e9b5ae8bfc74ddb"],["/discordapps.dev/1f1e6-1f1f7.c4023db6.svg","06b81704d7b89f08dae734409b3f9320"],["/discordapps.dev/1f1e6-1f1f8.1a6de69f.svg","2bbe762f2ed3ca3d9daab13cb96efada"],["/discordapps.dev/1f1e6-1f1f9.3bf3b3c6.svg","31ad9f90fa231ed0c0b947deadbfe176"],["/discordapps.dev/1f1e6-1f1fa.7df51f83.svg","089a9442fa6faeffeda0150ae182eccc"],["/discordapps.dev/1f1e6-1f1fc.e019d2d9.svg","b6b3224833a3fab47498f6a9d83be368"],["/discordapps.dev/1f1e6-1f1fd.ea851d45.svg","364f7b7682f692230c6871fc30f19876"],["/discordapps.dev/1f1e6-1f1ff.4bcec899.svg","765d88cb946d2435d143da7638c3a009"],["/discordapps.dev/1f1e7-1f1e6.04d321b1.svg","cba3943cf437ace539cf137343c080d6"],["/discordapps.dev/1f1e7-1f1e7.0d552338.svg","ccd75c3d36c0427d63f026bd08eec5ae"],["/discordapps.dev/1f1e7-1f1e9.4190ce8b.svg","9bed1a653d1ed1f2106c8b0eb13b6c43"],["/discordapps.dev/1f1e7-1f1ea.585290df.svg","32b15e6a387d9237339d816c1ac5012c"],["/discordapps.dev/1f1e7-1f1eb.57ca06f4.svg","b618d9b3b084c13742cf10508f72cae9"],["/discordapps.dev/1f1e7-1f1ec.04c2cb17.svg","3b7879f4b8000316eb26cbef996102bf"],["/discordapps.dev/1f1e7-1f1ed.0db8867b.svg","1203d99f39734ebef456a7fa7df54916"],["/discordapps.dev/1f1e7-1f1ee.3c006f2d.svg","11d24452092b69aefaa2bc1cfd8d080c"],["/discordapps.dev/1f1e7-1f1ef.44d9ae15.svg","88a8d5ab27e338b68bb20fa20577405c"],["/discordapps.dev/1f1e7-1f1f1.7f18abb7.svg","8cde1631998a5b968a69063ab5b969db"],["/discordapps.dev/1f1e7-1f1f2.2b507468.svg","cef76050138bc289891b492d1703fedb"],["/discordapps.dev/1f1e7-1f1f3.52c75492.svg","7cc3012c0a3c2e6502fff3f2061283a5"],["/discordapps.dev/1f1e7-1f1f4.8d38c2ad.svg","c4a172646ffdb980964bf399fd000dba"],["/discordapps.dev/1f1e7-1f1f6.f9f69c99.svg","d489c1409382c9d72effb6223236567c"],["/discordapps.dev/1f1e7-1f1f7.ef746b8f.svg","407b23225039d193f5e539e2de0900f2"],["/discordapps.dev/1f1e7-1f1f8.58ca0865.svg","388fb4565a0c62ff75b7dc86f92bf1b5"],["/discordapps.dev/1f1e7-1f1f9.416260b3.svg","62b4f6fce2a4bd6f4ae8963260b4b8f2"],["/discordapps.dev/1f1e7-1f1fb.cee3040c.svg","1d2976b1e227bd271bcbcf3e3da9e6fc"],["/discordapps.dev/1f1e7-1f1fc.bcdfee06.svg","690066ce531e722fffabd032c5a8a774"],["/discordapps.dev/1f1e7-1f1fe.03465708.svg","86bcc5e9f70c5794cbe5b08c03f7c068"],["/discordapps.dev/1f1e7-1f1ff.40df548f.svg","661f2b47d604ac019ee43f118b815d60"],["/discordapps.dev/1f1e8-1f1e6.5b3a7333.svg","6ea8666882589830dd40b86f950081bf"],["/discordapps.dev/1f1e8-1f1e8.a25604bf.svg","8348b09ba2d47bd880723408bc91970a"],["/discordapps.dev/1f1e8-1f1e9.703bfd39.svg","2ed98c24951a8699ad5be11006709adf"],["/discordapps.dev/1f1e8-1f1eb.c82b0b69.svg","6cfed08765ddebc69a9fec2583049d15"],["/discordapps.dev/1f1e8-1f1ec.499856a2.svg","649e2d1e43c47d5dd02b6a2b50886ddd"],["/discordapps.dev/1f1e8-1f1ed.1fa5be26.svg","728982808359b77ea519b24e6be7a218"],["/discordapps.dev/1f1e8-1f1ee.811d987d.svg","4d9908dec47fccd0dee025bd4b1f3ca8"],["/discordapps.dev/1f1e8-1f1f0.df9a7963.svg","d9ae67dcf0c3a6f1cd7dab3f4de6dc91"],["/discordapps.dev/1f1e8-1f1f1.c6f37ae5.svg","4071a277a721553383b6505c1efe4485"],["/discordapps.dev/1f1e8-1f1f2.39baa6fe.svg","962085c2759e97a9a5ae9281c6d20ea1"],["/discordapps.dev/1f1e8-1f1f3.71b04f50.svg","d39728b84718665ada444d92579fadae"],["/discordapps.dev/1f1e8-1f1f4.7ade25c4.svg","95752fe012425c0f62e8897a92916613"],["/discordapps.dev/1f1e8-1f1f5.e44dddb2.svg","c1a36c711f0ae0ab46c7dce06f63a723"],["/discordapps.dev/1f1e8-1f1f7.0b2b002e.svg","5bb8f3219c8f09abe83edb66e11ba844"],["/discordapps.dev/1f1e8-1f1fa.6da931b8.svg","7ad66e7bc98f1ab73026bc867f008fbb"],["/discordapps.dev/1f1e8-1f1fb.9cee7af1.svg","53e7f7ae06e8348b6586887e7c607204"],["/discordapps.dev/1f1e8-1f1fc.7ac0f34d.svg","48f2b28431184c4a0db67917c237179b"],["/discordapps.dev/1f1e8-1f1fd.e04f949b.svg","8ca30f720ae07015c4c8e49bb2d6e42f"],["/discordapps.dev/1f1e8-1f1fe.5d8788d0.svg","d1f393cfbb7178a8795d19e287788703"],["/discordapps.dev/1f1e8-1f1ff.32a7c739.svg","92a1cad7710f4afbcc4b9d2e9863c623"],["/discordapps.dev/1f1e9-1f1ea.e18fb3b5.svg","939afd91bea7074f84f4a328ca095295"],["/discordapps.dev/1f1e9-1f1ec.14ac8655.svg","25a61f86196b27d9ab335deb79723af4"],["/discordapps.dev/1f1e9-1f1ef.3532a7ba.svg","bc0d8fde67fbbe1382f66744dc765d07"],["/discordapps.dev/1f1e9-1f1f0.ea8d5e9d.svg","1eb2893dc9f4ad8ef5f3dc001c922c69"],["/discordapps.dev/1f1e9-1f1f2.fb642994.svg","59c557a22f8839466e233847b0d86cfe"],["/discordapps.dev/1f1e9-1f1f4.376311d9.svg","744e3c8dedcebb70840ab009f95b13d3"],["/discordapps.dev/1f1e9-1f1ff.ccec0ff3.svg","619734e944260b818f266b6e0390bead"],["/discordapps.dev/1f1ea-1f1e6.1a8f1f1c.svg","a8224968196d0dd6d84e44c98093c280"],["/discordapps.dev/1f1ea-1f1e8.9687e62e.svg","43cc209f984220ed2ef463c525082c5a"],["/discordapps.dev/1f1ea-1f1ea.8f25bfb4.svg","72802e4dbb8d31e19e3de610500ab9f4"],["/discordapps.dev/1f1ea-1f1ec.ea29654b.svg","a0634b212047f7fdf09bc113fde994fe"],["/discordapps.dev/1f1ea-1f1ed.5fab1b55.svg","e37010ffeb0b56e773c3a2812532bf83"],["/discordapps.dev/1f1ea-1f1f7.207cbcea.svg","cf2083761cb0b2fcf29ffb4efa2414c3"],["/discordapps.dev/1f1ea-1f1f9.3b176126.svg","d0af777a290a6f80b63aedfd99ee6c3f"],["/discordapps.dev/1f1ea-1f1fa.23419a98.svg","4be7421b4e5f8718344dffd8549333e9"],["/discordapps.dev/1f1eb-1f1ee.508dfcf9.svg","cd2e96a846ada23ae0949bcb18534b1f"],["/discordapps.dev/1f1eb-1f1ef.692eb21e.svg","4b6c6def299739ec0e4ef3016fd7df05"],["/discordapps.dev/1f1eb-1f1f0.e5c63d69.svg","1697e3e1209ada4d87a8ce00825f8141"],["/discordapps.dev/1f1eb-1f1f2.1d4c935d.svg","622e4fca94d491574c4a1281a1ef7314"],["/discordapps.dev/1f1eb-1f1f4.21e96768.svg","04b0bd887b326b6d1bb2fd83bafd7f1f"],["/discordapps.dev/1f1eb-1f1f7.e44dddb2.svg","c1a36c711f0ae0ab46c7dce06f63a723"],["/discordapps.dev/1f1ec-1f1e6.f1006d48.svg","1adadc61eff78ca7ae57787e6717f564"],["/discordapps.dev/1f1ec-1f1e7.15195767.svg","99a9e5571c2f5acd9cb910ce6a3f39a6"],["/discordapps.dev/1f1ec-1f1e9.bba2f0fa.svg","5c02c6fc239702ef7afbea0f9cbfe17a"],["/discordapps.dev/1f1ec-1f1ea.f7b30406.svg","f7f2de15054ec5ac9be3d9bf285e8320"],["/discordapps.dev/1f1ec-1f1eb.23d3cb2d.svg","ea3a145d691f58154a44acffd1ab6ff3"],["/discordapps.dev/1f1ec-1f1ec.c00ba56e.svg","f1998b531e92ad407b62f515dbe28e1a"],["/discordapps.dev/1f1ec-1f1ed.75604cc1.svg","b6dcc90d03def047251992cca264d755"],["/discordapps.dev/1f1ec-1f1ee.5027204f.svg","62f506dd2474c7c3d84c2277b48f0019"],["/discordapps.dev/1f1ec-1f1f1.ae9ae55b.svg","52bafddf281d84b9afbcb5461967990a"],["/discordapps.dev/1f1ec-1f1f2.911c154e.svg","cc9026e4314eec2edaaf1207d38e6d06"],["/discordapps.dev/1f1ec-1f1f3.fb70f39e.svg","5d4c3bb09da9270585624dd8997064e1"],["/discordapps.dev/1f1ec-1f1f5.79c0e35c.svg","1c146cdff31786fc64da4158088d7813"],["/discordapps.dev/1f1ec-1f1f6.81009872.svg","e80351257922a217be89685598d09340"],["/discordapps.dev/1f1ec-1f1f7.4a4d5e85.svg","4da46394f31b6dde1ac858f27e371dbd"],["/discordapps.dev/1f1ec-1f1f8.018ff6c8.svg","66e27c1bf701dff9f2c3f9428c1e3716"],["/discordapps.dev/1f1ec-1f1f9.cdc65f16.svg","da54b9bf623f6bf35e6e5922f9228aa4"],["/discordapps.dev/1f1ec-1f1fa.02765584.svg","461f9fb47f2d998cf2f2ae7c95f8cf87"],["/discordapps.dev/1f1ec-1f1fc.92f2fbb7.svg","04c8b9ed019ce81a510e8866efbd360c"],["/discordapps.dev/1f1ec-1f1fe.c8c752c7.svg","da81a396d9646417f4de1b5666a64eef"],["/discordapps.dev/1f1ed-1f1f0.89134375.svg","7968207955275d49b4185fd8ce02895f"],["/discordapps.dev/1f1ed-1f1f2.7df51f83.svg","089a9442fa6faeffeda0150ae182eccc"],["/discordapps.dev/1f1ed-1f1f3.d424d317.svg","b5c9d55ea7c123c25b6dae4d8878ebec"],["/discordapps.dev/1f1ed-1f1f7.26475669.svg","de04008f1e2608c18925882d03e06ed2"],["/discordapps.dev/1f1ed-1f1f9.32b3a016.svg","3ca01981f93df96e92a633986def813b"],["/discordapps.dev/1f1ed-1f1fa.1d8e20d4.svg","81fc2b556ceda0e7454a32d46c7c54bc"],["/discordapps.dev/1f1ee-1f1e8.73ef0a04.svg","60ef554f0de960af055e7a208f05b459"],["/discordapps.dev/1f1ee-1f1e9.9719525b.svg","eff38923a385151be23438cb3c8b11c7"],["/discordapps.dev/1f1ee-1f1ea.1bffc7d1.svg","6f51ceb455aec2ab2d85e8cadf6aa79f"],["/discordapps.dev/1f1ee-1f1f1.1fa74891.svg","2fdf6f04696efea8e293bcff42a36dc9"],["/discordapps.dev/1f1ee-1f1f2.a8329c34.svg","805f3106b7ca4c1fe8ba76543124b017"],["/discordapps.dev/1f1ee-1f1f3.413062c2.svg","cfe70da9dbbd44c91aa4310481dcba89"],["/discordapps.dev/1f1ee-1f1f4.14ac8655.svg","25a61f86196b27d9ab335deb79723af4"],["/discordapps.dev/1f1ee-1f1f6.a0ec4a33.svg","d0f82101fb1bb0b068e5f048cf1211d5"],["/discordapps.dev/1f1ee-1f1f7.66f4455b.svg","a003bd0873f93fd1095f9df6a4d18992"],["/discordapps.dev/1f1ee-1f1f8.369055b1.svg","e4df6ae4dcffd3cd3e3b686bbeefa56a"],["/discordapps.dev/1f1ef-1f1ea.cebb1f2a.svg","dce884a7a8675c6ff6f149e8bf21cb97"],["/discordapps.dev/1f1ef-1f1f2.c02d6bf2.svg","015c49a74a101354b978606d56ae8d4f"],["/discordapps.dev/1f1ef-1f1f4.03af0c7f.svg","2548460590c622e1493f9be0f053ea76"],["/discordapps.dev/1f1f0-1f1ea.773c0b1d.svg","41e202cbf12d7473cf320447b27b49c1"],["/discordapps.dev/1f1f0-1f1ec.eeb1a2bf.svg","a8e477ad00f8c492cacfb6022c959335"],["/discordapps.dev/1f1f0-1f1ed.6056f269.svg","cd00b81bb35b2a4ebff51641edad81a1"],["/discordapps.dev/1f1f0-1f1ee.75982fa3.svg","26d3b520ab05841b65fc6e4e0d5fbd02"],["/discordapps.dev/1f1f0-1f1f2.cc6670b0.svg","2b5aead432ae7667adc1812288182bdd"],["/discordapps.dev/1f1f0-1f1f3.d83352e4.svg","bf5509422cdbf04356bd742ebe948a7a"],["/discordapps.dev/1f1f0-1f1f5.c8890842.svg","e0cd271eb2f383d5d4e93fe71c1a3f4f"],["/discordapps.dev/1f1f0-1f1fc.3c803fe2.svg","f9e5ee010086899b5c4d31b5cfbb4004"],["/discordapps.dev/1f1f0-1f1fe.5790dc14.svg","420c78d13bdc8bc0196f9738cdb491f8"],["/discordapps.dev/1f1f0-1f1ff.04cb7d2d.svg","119ac47606cfa2b965e6ac789aa606b1"],["/discordapps.dev/1f1f1-1f1e6.c643b934.svg","ad8e424913be4fd9ec69421bc37d4bc2"],["/discordapps.dev/1f1f1-1f1e7.64283791.svg","15ff5c02fc69e8516224bdf39a00e7a6"],["/discordapps.dev/1f1f1-1f1e8.befd4a7d.svg","baa3c27e05395ca8012cadcf0b05b774"],["/discordapps.dev/1f1f1-1f1ee.83110489.svg","a52fbeb793d03ded5ee8c168b8a6e7d6"],["/discordapps.dev/1f1f1-1f1f0.f5e26938.svg","0de77c5d05390bb1fb630c962a56bb48"],["/discordapps.dev/1f1f1-1f1f7.d4cedda0.svg","0ac3af6c036b70334c9f4a51246bff13"],["/discordapps.dev/1f1f1-1f1f8.692a8a3d.svg","ca37b723b0024a6bd501ef04eadf4922"],["/discordapps.dev/1f1f1-1f1f9.04273dfb.svg","400cdb5817f3e5815ecbeb879dfdfbec"],["/discordapps.dev/1f1f1-1f1fa.b356257e.svg","0d7d66cf0a8f30478301c67839c17730"],["/discordapps.dev/1f1f1-1f1fb.06d7f11c.svg","8d3134ef31d10935beb0141f9918c41f"],["/discordapps.dev/1f1f1-1f1fe.642bf63d.svg","dc9e0296895e64a0dc96c6954aadd1d4"],["/discordapps.dev/1f1f2-1f1e6.7cf99271.svg","69eef4c9b90da86b24cb69aafd529140"],["/discordapps.dev/1f1f2-1f1e8.77f9bc2a.svg","33fc478ecbb89220b67fe96b251e23cc"],["/discordapps.dev/1f1f2-1f1e9.34722307.svg","239a65b494415a12508c3b77ba0cf0dd"],["/discordapps.dev/1f1f2-1f1ea.ed2a8045.svg","33bf70749ffe96311d85d5edb7ffa9a5"],["/discordapps.dev/1f1f2-1f1eb.e44dddb2.svg","c1a36c711f0ae0ab46c7dce06f63a723"],["/discordapps.dev/1f1f2-1f1ec.91d07981.svg","8e88bfa7cfb20e6e7b01f8dedccef158"],["/discordapps.dev/1f1f2-1f1ed.c7b494cc.svg","a04412e248d53a4b2581f1ad781beaae"],["/discordapps.dev/1f1f2-1f1f0.e99feca6.svg","06cf3d86babf10c4c99a13812c85c1a5"],["/discordapps.dev/1f1f2-1f1f1.b34cb0c4.svg","f509dd925ffc8d333efa3bfa37f68484"],["/discordapps.dev/1f1f2-1f1f2.acb2c58b.svg","de00df62d77af80d6d3885ee67232928"],["/discordapps.dev/1f1f2-1f1f3.ac88e037.svg","3dc0656020a6fc85bf60b12a009e435f"],["/discordapps.dev/1f1f2-1f1f4.b357da34.svg","7dcb1d9b3f0495a2ea886eeea6dfbfd8"],["/discordapps.dev/1f1f2-1f1f5.1c03b4c8.svg","7370737a7111529d65b413d01eef1591"],["/discordapps.dev/1f1f2-1f1f6.bbb9bb4a.svg","e4bc36c061c4f447c010e6be80c9e0bc"],["/discordapps.dev/1f1f2-1f1f7.58cdb3d7.svg","5fb1abc88ca4ac5e4984ba6184a13389"],["/discordapps.dev/1f1f2-1f1f8.3cb62f40.svg","98f1db383b5a6b6f7f88ab12ea1ea617"],["/discordapps.dev/1f1f2-1f1f9.67d13460.svg","33faa6649f9e67fd4daa303c70198332"],["/discordapps.dev/1f1f2-1f1fa.afd0b205.svg","b71ff9fffd256b95abc918130fce2af7"],["/discordapps.dev/1f1f2-1f1fb.2d2df9c7.svg","e699bf5a211e116d1b2a2ffdd34de129"],["/discordapps.dev/1f1f2-1f1fc.38bddb99.svg","5bfe6c2c4b0d14b6ac8801972d0f0534"],["/discordapps.dev/1f1f2-1f1fd.0c489398.svg","3c5b8da90d812275171a486dfd32b54c"],["/discordapps.dev/1f1f2-1f1fe.1aa06c61.svg","c44e8e4bbc5b8e9e4c695ffacd2af82c"],["/discordapps.dev/1f1f2-1f1ff.71557d53.svg","9c766bfa8ed02217f1ecb22eccd9d27c"],["/discordapps.dev/1f1f3-1f1e6.b17f6814.svg","79f3f954459f5c14ca49858996d9b6e6"],["/discordapps.dev/1f1f3-1f1e8.c29c05f5.svg","572d02aaf3b8ec9697b8a9c649dc2205"],["/discordapps.dev/1f1f3-1f1ea.bda89cd5.svg","533380b8faf02c88ab68565a898114bb"],["/discordapps.dev/1f1f3-1f1eb.dc81e0af.svg","92fe330f2f22fddea768b7bc429c393a"],["/discordapps.dev/1f1f3-1f1ec.13330a97.svg","d8b5f4d93ac7396a44eb3352d5e31cee"],["/discordapps.dev/1f1f3-1f1ee.5553225e.svg","89e84790ce6baaeb39b51a74603b29bc"],["/discordapps.dev/1f1f3-1f1f1.e611df6c.svg","4e731115cad84fd5e7bc024d9b146765"],["/discordapps.dev/1f1f3-1f1f4.aeb21e38.svg","ce4def896435e73267187e77a8e32e76"],["/discordapps.dev/1f1f3-1f1f5.f2f03c3c.svg","47cd7f001f25667541850514d6b528f7"],["/discordapps.dev/1f1f3-1f1f7.b7505152.svg","c1f7c02fd252677d2f1c823eebcfb12f"],["/discordapps.dev/1f1f3-1f1fa.764b7f5e.svg","e4011344d97c939e2ed95d329f24d9be"],["/discordapps.dev/1f1f3-1f1ff.d4381377.svg","f0dcfef90556797a8c0e2aa8268ce73f"],["/discordapps.dev/1f1f4-1f1f2.de3a4039.svg","c1e139ac8fa94073d413a287e14f7c3b"],["/discordapps.dev/1f1f5-1f1e6.b696172e.svg","d31e2e8df725339060d7c80a7f4ec133"],["/discordapps.dev/1f1f5-1f1ea.b7fe4dc3.svg","1abb9ba2de38e6c8d6c130534b5d2d4a"],["/discordapps.dev/1f1f5-1f1eb.7b693467.svg","2661c3af3a0a3d6219c18f602735fb69"],["/discordapps.dev/1f1f5-1f1ec.de7c24e6.svg","d55ad76981b445a8a3a95a4dc67e1804"],["/discordapps.dev/1f1f5-1f1ed.9eb1cbe6.svg","fddabadcb0b358a763a9afd2857bb5d5"],["/discordapps.dev/1f1f5-1f1f0.4a849c2e.svg","4a95a88bc4e490ad256b13173e85b8a5"],["/discordapps.dev/1f1f5-1f1f1.ad05e3a1.svg","db99e1f10b9b733e13f049300bfaa93b"],["/discordapps.dev/1f1f5-1f1f2.b2f807c9.svg","2bf0b0119e3ef5d288d1c7f708acec89"],["/discordapps.dev/1f1f5-1f1f3.6acf81d8.svg","a43733a41d048fcf15901db7cf711829"],["/discordapps.dev/1f1f5-1f1f7.48bb1903.svg","f11fea7aa78defc90c68b7cfb029bc28"],["/discordapps.dev/1f1f5-1f1f8.fb3c0d69.svg","8af934770d4b2612b7da10c4bb8c486d"],["/discordapps.dev/1f1f5-1f1f9.fee1ea57.svg","cf5ba7f66506434076bbbe11ac72452f"],["/discordapps.dev/1f1f5-1f1fc.0f797d50.svg","f35b8830aae5d9e0ab53b6918fd2d632"],["/discordapps.dev/1f1f5-1f1fe.5d4ce754.svg","47a313745cb9ff00d8fedf333d60fc1f"],["/discordapps.dev/1f1f6-1f1e6.bec915d0.svg","695995d6ddb114b045eac53953a8ded7"],["/discordapps.dev/1f1f7-1f1ea.8cfc1967.svg","c8e10ca93aee8c709c9ad7086ef7db0b"],["/discordapps.dev/1f1f7-1f1f4.72a91b3a.svg","9d3c3d0c6d823bdf4f3fb73d27f8826e"],["/discordapps.dev/1f1f7-1f1f8.457084db.svg","b044bc510f436a9f7d47629f27bcf358"],["/discordapps.dev/1f1f7-1f1fa.65e29db4.svg","01efcb4dcb5b464a6859688f7e48907f"],["/discordapps.dev/1f1f7-1f1fc.e8cf5870.svg","351457feb3d64fb2a0332f088992e808"],["/discordapps.dev/1f1f8-1f1e6.18940f29.svg","e2fd81b98714ede9438e987b8eaaf4d9"],["/discordapps.dev/1f1f8-1f1e7.319df6bf.svg","73133b26661cf0f992d5dde9385605b3"],["/discordapps.dev/1f1f8-1f1e8.9ef8ade3.svg","7ca358aad934a052df4e943b5b99967e"],["/discordapps.dev/1f1f8-1f1e9.4b1632be.svg","677a2f56794095afd1ef17ba9306da04"],["/discordapps.dev/1f1f8-1f1ea.929454cd.svg","d185c005a74ae7371c3930da1eb21b89"],["/discordapps.dev/1f1f8-1f1ec.d445f0ff.svg","169d41570e242f9f69bda7fb598d0cd7"],["/discordapps.dev/1f1f8-1f1ed.3d4bd202.svg","5fb9c7b96aae7603c6e9dda5344ca0a6"],["/discordapps.dev/1f1f8-1f1ee.4737a79e.svg","c50675737a4171106c8327256bb2a07b"],["/discordapps.dev/1f1f8-1f1ef.aeb21e38.svg","ce4def896435e73267187e77a8e32e76"],["/discordapps.dev/1f1f8-1f1f0.2e1b0761.svg","db83bf812a67bbce39e1e099f641ad14"],["/discordapps.dev/1f1f8-1f1f1.c3a9845c.svg","3088186e32c678d6b2b725ae5162bd3f"],["/discordapps.dev/1f1f8-1f1f2.825be159.svg","d82e9103d237a0fcc9d41ab4dffbc8ff"],["/discordapps.dev/1f1f8-1f1f3.89f8c8b2.svg","f1d88cb12c58a4e181758b70a1bcd78d"],["/discordapps.dev/1f1f8-1f1f4.38201bf2.svg","717b5f50d630648af37fe8ead20e786b"],["/discordapps.dev/1f1f8-1f1f7.79844ebb.svg","3806a753a87972a4647463ec5467333a"],["/discordapps.dev/1f1f8-1f1f8.3ed81e3a.svg","ddf238511a3cb9445ac46bb5d35e89cd"],["/discordapps.dev/1f1f8-1f1f9.1994c21f.svg","026a986362375cc4539d0f124cf2120c"],["/discordapps.dev/1f1f8-1f1fb.b5d5edf4.svg","bf5a9c3a2c3b15a84694327705136ea0"],["/discordapps.dev/1f1f8-1f1fd.e2e4306f.svg","0f6a5e64d6e4fba1ef2c74dd1fc71b04"],["/discordapps.dev/1f1f8-1f1fe.ed82cc90.svg","ed30431a60d06a264fca091d5c788b5b"],["/discordapps.dev/1f1f8-1f1ff.db11dd94.svg","9b15eea3d759f65781db7ba90b6aaeb5"],["/discordapps.dev/1f1f9-1f1e6.76591f27.svg","ad3b29d7b10230c8c8ace42fcbb3c7c1"],["/discordapps.dev/1f1f9-1f1e8.839080d6.svg","13b9f62cbedf0217e876bcf55d4aef25"],["/discordapps.dev/1f1f9-1f1e9.841095dd.svg","244c04cb4bdb6dd4784d82df297245c8"],["/discordapps.dev/1f1f9-1f1eb.a6993203.svg","2b0e93ab364cb49b847d2f843649c1aa"],["/discordapps.dev/1f1f9-1f1ec.ba8b6b31.svg","b6eec570d5233a65fce6c702939b762a"],["/discordapps.dev/1f1f9-1f1ed.10102828.svg","852d533974b4b9b6c4447ccd9801b142"],["/discordapps.dev/1f1f9-1f1ef.b7dd46c4.svg","9456c1edf27b3c677b8726cae427c2a6"],["/discordapps.dev/1f1f9-1f1f0.f95ae93a.svg","fc69f60455ab04068f88cebea3bc235f"],["/discordapps.dev/1f1f9-1f1f1.ffd0c4f3.svg","cd0b602377aa51caadf36db01dcd54db"],["/discordapps.dev/1f1f9-1f1f2.c2a91563.svg","438ea27c2ae7eb9a04e0b0c0afbacf54"],["/discordapps.dev/1f1f9-1f1f3.6559403d.svg","2dfd2cab9ebadb45706d69e6c339468d"],["/discordapps.dev/1f1f9-1f1f4.08c7237a.svg","32c2033b3811823ecba457d5bcec3013"],["/discordapps.dev/1f1f9-1f1f7.12e48b03.svg","5c1ddcf25e62845a09ddaedb534eb028"],["/discordapps.dev/1f1f9-1f1f9.a8394530.svg","5c5c329a0b2f551cf941107f889453f3"],["/discordapps.dev/1f1f9-1f1fb.2e96f9ed.svg","23e46dd5ab86f9c5754f091a105b9104"],["/discordapps.dev/1f1f9-1f1fc.a87eee10.svg","9a866b52de950f63b2a345271a2a54b7"],["/discordapps.dev/1f1f9-1f1ff.d4cc1276.svg","1a7681dc245b3106404849f80f5937a0"],["/discordapps.dev/1f1fa-1f1e6.153ee43a.svg","ac4bcb496ca349a21b05e400bd8ac5dc"],["/discordapps.dev/1f1fa-1f1ec.f61c653a.svg","ecc1234ed5af7d4d3f7cabed150a9e63"],["/discordapps.dev/1f1fa-1f1f2.3330be0f.svg","d788b9231ed2028dc29245f76cf0a415"],["/discordapps.dev/1f1fa-1f1f3.67d845dc.svg","a3f841eb785e386094300877252f0751"],["/discordapps.dev/1f1fa-1f1f8.3330be0f.svg","d788b9231ed2028dc29245f76cf0a415"],["/discordapps.dev/1f1fa-1f1fe.5d66a344.svg","a46c15a4bf9cbd4c3c2fe3eb76c944f0"],["/discordapps.dev/1f1fa-1f1ff.650b7802.svg","7b5f068caef383296afcee1c198394b3"],["/discordapps.dev/1f1fb-1f1e6.cdc67879.svg","6db161e1b1d85019bd569e25b6d87f03"],["/discordapps.dev/1f1fb-1f1e8.78113619.svg","3c4d4812de2506b893de3eeed446b03a"],["/discordapps.dev/1f1fb-1f1ea.9af9441c.svg","2e1982ae2ce9eeca687d83fa92661e1e"],["/discordapps.dev/1f1fb-1f1ec.821c31da.svg","898dee1d7461139f2cac3259def418ab"],["/discordapps.dev/1f1fb-1f1ee.19a399bf.svg","31a53c15df6b4ab7eba039e42b3f0314"],["/discordapps.dev/1f1fb-1f1f3.0b133abb.svg","cc2541c8b215b79d5d05065db41a27d5"],["/discordapps.dev/1f1fb-1f1fa.e5adff28.svg","e402061f22397e9d9027c5ffa1fa44fe"],["/discordapps.dev/1f1fc-1f1eb.b6144f5e.svg","30a3dc6c326bf4c6fa7ccf034d5fc0c0"],["/discordapps.dev/1f1fc-1f1f8.2319a444.svg","a638c54dfc90ef0457c8afa9b59ed153"],["/discordapps.dev/1f1fd-1f1f0.599d47df.svg","ec3a29f6b06bb07a638c92bfcde037c3"],["/discordapps.dev/1f1fe-1f1ea.7d4ba854.svg","9844a069ae43c742f234429e5ac05d5b"],["/discordapps.dev/1f1fe-1f1f9.ebc185ef.svg","8ba98dbf55284b1ff94ffcaafd6749b7"],["/discordapps.dev/1f1ff-1f1e6.a9826940.svg","bfc4e3aad2ba71c04041c2e69409e98e"],["/discordapps.dev/1f1ff-1f1f2.01e3f9d4.svg","1f170dae3d3a29521954072f3d32d51c"],["/discordapps.dev/1f1ff-1f1fc.c6d9f8f1.svg","1507c78581a695b71930b24eb6db55b7"],["/discordapps.dev/1f30d.3a036f85.svg","6d274903d488a6b57e40a883809fb33c"],["/discordapps.dev/1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.1f9f70c2.svg","9029ac54b7922ae530aa8f0f0e1a2b6a"],["/discordapps.dev/1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.32625aa3.svg","a5414b22592b99113a3b8ee550607816"],["/discordapps.dev/1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.d7f897fe.svg","030eea881ddab556dcf9713ad69540cd"],["/discordapps.dev/1f50e.43549be6.svg","0477c6a43026315dd623bc6367e18acb"],["/discordapps.dev/1f517.fb7fa6a2.svg","7c13aa0def6ccb6932f47dedd33f59c1"],["/discordapps.dev/26d3.df26b99e.svg","054f3a3f26cef91a51405d70a83f9102"],["/discordapps.dev/26f3.1c592450.svg","795431f7abdbe4dcaa45e1355146ecec"],["/discordapps.dev/arrow.4675c036.png","45d9c230dc7c616cf64565d43bcc4a6a"],["/discordapps.dev/hk.19c8b6f4.jpg","91e6f40d1a67d32da5d40ebc196354fa"],["/discordapps.dev/index.css","48af8f16fcaa93e4057ed1bdcb29a327"],["/discordapps.dev/index.js","453ca7a04ff5e1b6db1de435f3dd9435"],["/discordapps.dev/menu-icon.8188857e.png","764dfc508abcbfd61476d5077435b9e0"],["/discordapps.dev/pensive.8f076f62.svg","f17bd7d762a576c06bea26a3015be6ac"],["/discordapps.dev/rpc.89411526.jpg","b81581644664c93dc308451c67411535"]];
var cacheName = 'sw-precache-v3-ls.terminal.ink-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  // console.log(event.request.url)
  if (/\/api\//g.test(event.request.url)) return false;
  if (/\/sitemap.xml$/.test(event.request.url)) return false;
  if (/\/robots.txt$/.test(event.request.url)) return false;

  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/discordapps.dev/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__).*"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







