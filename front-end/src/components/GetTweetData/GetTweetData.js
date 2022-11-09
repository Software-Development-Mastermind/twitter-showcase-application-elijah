const GetTweetData = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("/fakeData")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data);
            });
    }, []);

    return (
        <div>
            {!data ? (
                <p>...Loading</p>
            ) : (
                data.data.map((d, i) => {
                    return <p key={i}>{d}</p>;
                })
            )}
        </div>
    );
};

export default GetTweetData;
