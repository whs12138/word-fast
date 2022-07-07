## 单词快播 `Vue3`
> 播放范围（四级词汇）
- 单词
- 音标
- 发音
- 词性、词义
- 例句

> 播放模式
- 自动播放(2s一个)
- 点击播放

> 数据解析
#### 当前只使用一部分，可自行扩展
- 以第一个单词 `cancel` 为例
```
{
  // 单词序号
  "wordRank": 1,
  // 单词
  "headWord": "cancel",
  "content": {
    "word": {
      "wordHead": "cancel",
      "wordId": "CET4_3_1",
      "content": {
        // 单词相关测试
        "exam": [
          {
            // 问题
            "question": "As we can no longer wait for the delivery of our order, we have to _______ it.",
            // 答案
            "answer": {
              "explain": " cancel order：  取消订单。 句意：  订购的货物尚未送到， 我们不能再等了， 不得不取消订单。 postpone：  推迟， 使延期； refuse：  拒绝， 谢绝； delay：  耽搁， 延迟， 延期。",
              "rightIndex": 4
            },
            // 测试类型
            "examType": 1,
            // 选项
            "choices": [
              {
                "choiceIndex": 1,
                "choice": "postpone"
              },
              {
                "choiceIndex": 2,
                "choice": "refuse"
              },
              {
                "choiceIndex": 3,
                "choice": "delay"
              },
              {
                "choiceIndex": 4,
                "choice": "cancel"
              }
            ]
          }
        ],
        // 例句
        "sentence": {
          "sentences": [
            {
              // 英语
              "sContent": "Our flight was cancelled.",
              // 中文翻译
              "sCn": "我们的航班取消了。"
            },
            {
              "sContent": "I’m afraid I’ll have to cancel our meeting tomorrow.",
              "sCn": "恐怕我得取消我们明天的会议。"
            },
            {
              "sContent": "You’ll just have to ring John and cancel.",
              "sCn": "你只能打电话给约翰取消了。"
            }
          ],
          // 描述
          "desc": "例句"
        },
        // 美音音标
        "usphone": "'kænsl",
        // 近义词
        "syno": {
          "synos": [
            {
              // 词性
              "pos": "vt",
              // 对应词义
              "tran": "[计]取消；删去",
              // 近义词/词组
              "hwds": [
                {
                  "w": "recall"
                },
                {
                  "w": "call it off"
                }
              ]
            },
            {
              "pos": "vi",
              "tran": "[计]取消；相互抵销",
              "hwds": [
                {
                  "w": "call it off"
                },
                {
                  "w": "declare off"
                }
              ]
            },
            {
              "pos": "n",
              "tran": "[计]取消，撤销",
              "hwds": [
                {
                  "w": "withdrawal"
                },
                {
                  "w": "revocation"
                }
              ]
            }
          ],
          "desc": "同近"
        },
        // 英音音标
        "ukphone": "'kænsl",
        // 英音发音https请求参数
        "ukspeech": "cancel&type=1",
        // 短语
        "phrase": {
          "phrases": [
            {
              // 英语
              "pContent": "cancel button",
              // 翻译
              "pCn": "取消按钮"
            },
            {
              "pContent": "cancel out",
              "pCn": "取消；抵销"
            },
            {
              "pContent": "cancel after verification",
              "pCn": "核销"
            }
          ],
          "desc": "短语"
        },
        // 同根词
        "relWord": {
          "rels": [
            {
              // 词性
              "pos": "n",
              "words": [
                {
                  // 英语
                  "hwd": "cancellation",
                  // 翻译
                  "tran": " 取消；删除"
                }
              ]
            }
          ],
          "desc": "同根"
        },
        // 美音发音https请求参数
        "usspeech": "cancel&type=2",
        // 翻译
        "trans": [
          {
            // 中释
            "tranCn": " 取消， 撤销； 删去",
            "descOther": "英释",
            // 词性
            "pos": "vt",
            "descCn": "中释",
            // 英英释义
            "tranOther": "to decide that something that was officially planned will not happen"
          }
        ]
      }
    }
  },
  // 单词书 ID
  "bookId": "CET4_3"
}
```
`引用： https://github.com/kajweb/dict/tree/master/book 资料包`