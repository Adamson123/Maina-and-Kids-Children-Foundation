const NewsletterForm = () => {
    return (
        <div className="flex flex-col gap-4 max-w-[400px] sm:max-w-[330px] sm:items-center">
            <h3 className="text-2xl font-semibold sm:text-center sm:text-[22px]">
                Subscribe to Our Newsletter
            </h3>
            <p className="text-sm sm:text-center">
                Want to hear what we are up to? subscribe to get deets on our
                projects and activities
            </p>
            <iframe
                src="https://@hopeineverychildmkcf.substack.com/embed"
                scrolling="no"
                frameBorder="0"
                style={{ background: "black" }}
                className="w-full max-w-[400px] h-[200px] rounded-lg shadow-lg [div>*]"
            />
        </div>
    );
};

export default NewsletterForm;
