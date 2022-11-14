import { Avatar, Divider, List, Skeleton, Collapse } from "antd";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CalendarTwoTone } from "@ant-design/icons";
const { Panel } = Collapse;
const OrderHistory = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [time, setTime] = useState(Date.now());
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        console.log("ran");
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (data.length < 50) {
      const interval = setInterval(() => setTime(Date.now()), 3000);
      loadMoreData();
      return () => {
        clearInterval(interval);
      };
    }
  }, [time]);
  return (
    <div
      id="scrollableDiv"
      style={{
        height: "50vh",
        overflow: "auto",
        //padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <Collapse>
              <Panel
                header={
                  <div>
                    <CalendarTwoTone />
                    <p style={{ display: "inline", marginLeft: "1vh" }}>
                      date goes here
                    </p>
                  </div>
                }
              >
                <List.Item key={item.email}>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
                  <div>Content</div>
                </List.Item>
              </Panel>
            </Collapse>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default OrderHistory;
