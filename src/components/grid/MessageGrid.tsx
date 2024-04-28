import { MainProps } from "@/app/page";
import { useSearchFilter } from "@/commons/hooks/search-filter/useSearchFilter";
import { MessageBodyType } from "@/interfaces/message/MessageBodyType";
import { MessageType, attributeDescriptions } from "@/interfaces/message/MessageType";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Spin, Table, TableColumnsType, Tag, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import MessageCard from "../card/MessageCard";

type DefaultSort = 'ascend' | 'descend' | undefined;

const MessageGrid = ({ data }: MainProps) => {
    const [message, setMessage] = React.useState<MessageBodyType | null>(null);
    const [visible, setVisible] = React.useState<boolean>(false);
    const { searchFilter } = useSearchFilter<MessageType>(['message', 'title'], attributeDescriptions, 'title');

    const handleRowClick = (record: MessageBodyType) => {
        setMessage(record);
        setVisible(true);
    }

    const columns: TableColumnsType<MessageType> = [
        {
            title: 'Enqueued Date',
            dataIndex: 'enqueuedAt',
            key: 'enqueuedAt',
            sorter: (a, b) => a.enqueuedAt.localeCompare(b.enqueuedAt),
            defaultSortOrder: 'descend' as DefaultSort,
            render: (tag: string) => (
                <>
                    {new Date(tag).toLocaleString('pt-BR', { timeZone: 'UTC' })}
                </>
            )
        },
        {
            title: 'State', dataIndex: 'state', key: 'state', render: (tag: string, record: MessageType) => (
                <>
                    {tag === 'Active'
                        ? <Tag color="green" key="active">Active</Tag>
                        : <Tag color="red" key="inactive">Deferred</Tag>
                    }
                </>
            )
        },
        { title: 'Body Size', dataIndex: 'bodySize', key: 'bodySize', render: (text: string) => <span>{text} GB</span> },
        { title: 'Message', dataIndex: ['message', 'title'], key: 'messageTitle', ...searchFilter() },
        {
            key: 'action',
            render: (record: MessageType) => (
                <Button type="link" shape='circle' icon={<PlusCircleOutlined />} onClick={() => handleRowClick(record.message)}></Button>
            ),
        }
    ];

    return (
        <>
            <Typography style={{ margin: '18px' }}>
                <Title level={4}>Message Board</Title>
            </Typography>
            {data === undefined ? <Spin size="large" fullscreen /> : (
                <Table
                    style={{ padding: '10px' }}
                    size="small"
                    dataSource={data}
                    columns={columns}
                    pagination={{ pageSize: 5 }}
                >
                </Table>
            )}
            <MessageCard message={message} visible={visible} onClose={() => setVisible(false)} />
        </>
    );
}

export default MessageGrid;