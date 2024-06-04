const Instruction = () => {
    return (
        <>
            <div className="">
                <header className="instructions">
                <h2>Instructions</h2>
                <p>**Inviting Someone to Dinner:**</p>
                <p>Use the following format to invite someone to dinner:</p>
                <ul>
                <li><a href="/0/name">wouldyoube.vercel.app/0/name</a> (Replace "name" with the person's name)</li>
                </ul>

                <p>**Specifying a Date:**</p>
                <p>To specify a date for your invitation, use this format:</p>
                <ul>
                <li><a href="/0/name?when=20240123">wouldyoube.vercel.app/0/name?when=YYYYMMDD</a> (Replace "YYYYMMDD" with the desired date)</li>
                </ul>

                <p>**Making it Official:**</p>
                <p>To ask someone to become your significant other officially, use this format:</p>
                <ul>
                <li><a href="/1/name">wouldyoube.vercel.app/1/name</a> (Default relationship: Girlfriend)</li>
                </ul>
                <p>To specify a different relationship, use this format:</p>
                <ul>
                <li><a href="/1/name?status=status">wouldyoube.vercel.app/1/name?status=relationship_status</a> (Replace "relationship_status" with the desired relationship title)</li>
                </ul>
                </header>
            </div>
        </>
    )
}

export default Instruction;