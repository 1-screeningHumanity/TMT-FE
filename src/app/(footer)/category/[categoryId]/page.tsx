export default function Page(props: {
  params: { categoryId: string }
  searchParams: { name: string }
}) {
  const categoryId = props.params.categoryId
  const categoryName = props.searchParams.name
  console.log(categoryId, categoryName)
  return (
    <div>
      <h1>Page</h1>
    </div>
  )
}
