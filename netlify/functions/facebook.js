exports.handler = async (event) => {

    try {

        const body = JSON.parse(event.body);

        const response = await fetch(
            'https://graph.facebook.com/v22.0/2113790079474567/events?access_token=EAAR7eedX43oBRtJxfOzjbMnZAZAHqHtk6AmjwjZBGNqIFxMEFlUWAAGhXnHdkvtm2TtMMrHqvW8J7LxZAXKhVPkKcYhrAHI6yeoeovJqOKDvDSXIKZBN97WiYdIzn9GuyyDKGr9QasHiD5kfVDN5uvyVqRELckYCYazc5D9G5ksSL8YxnpWSMxZAdo13ZB6vQZDZD',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: [
                        {
                            event_name: body.event_name,
                            event_time: Math.floor(Date.now() / 1000),
                            action_source: 'website',
                            event_id: body.event_id,

                            user_data: {
                                client_user_agent: body.user_agent,
                                client_ip_address: event.headers['x-forwarded-for'] || ''
                            },

                            custom_data: body.event_data || {}
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message
            })
        };

    }

};
