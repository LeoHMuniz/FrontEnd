import { Plus, FileDown, Search, Filter, MoreHorizontal } from 'lucide-react'
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { Header } from './components/header'
import { Tabs } from './components/tabs'
import { Button } from './components/ui/button'
import { Control, Input } from './components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'
import { Pagination } from './components/pagination'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'


export interface TagResponse {
  first: number
  prev: number | null
  next: number
  last: number
  pages: number
  items: number
  data: Tag[]
}

export interface Tag {
  title: string
  amountOfVideos: number
  id: string
}

export function App() {

  const [searchParams, setSearchParams] = useSearchParams()
  const [filter, setFilter] = useState('')

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1 
  const urlFilter = searchParams.get('filter') ?? ''



  const { data: tagsResponse, isLoading } = useQuery<TagResponse>({
    queryKey: ['get-tags', urlFilter, page],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3333/tags?_page=${page}&_per_page=10&title=${urlFilter}`)
      const data = await response.json()
      return data
    },
    placeholderData: keepPreviousData,
  })

  function handleFilter(){
    setSearchParams(params=>{
      params.set('page','1')
      params.set('filter', filter)

      return params
    })
  }

  if (isLoading) {
    return null
  }


  return (
    <div className="py-10 space-y-8">
      <div>
        <Header />
        <Tabs />
      </div>
      <main className="max-w-6xl mx-auto space-y-5">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Tags</h1>
          <Button variant="primary" />
          <button className="inline-flex items-center gap-1.5 text-xs bg-teal-300 text-teal-950 font-medium rounded-full px-1.5 py-1">
            <Plus className="size-3" />
            Create New</button>
        </div>

        <div className='flex items-center justify-between'>
          <div className="flex items-center">
            <Input variant="filter">
              <Search className='size-3' />
              <Control
                placeholder="Search tags..."
                onChange={e => setFilter(e.target.value)}
                value={filter}
              />
            </Input>
            <Button>
              <Button onClick={handleFilter}>
                <Filter className="size-3" />
                Filter
              </Button>
            </Button>
          </div>

          <Button variant="primary">
            <FileDown className="size-3" />
            Export
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Amount of Videos</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tagsResponse?.data.map((tag) => {
              return (
                <TableRow key={tag.id}>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className='flex flex-col'>
                      <span className='font-medium'>{tag.title}</span>
                      <span className='text-xs text-zinc-500'>{tag.id}</span>
                    </div>
                  </TableCell>
                  <TableCell className='text-zinc-300'>
                    {tag.amountOfVideos} video(s)
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="icon">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        {tagsResponse && <Pagination pages={tagsResponse.pages} items={tagsResponse.items} page={page} />}
      </main>
    </div>
  )
}

