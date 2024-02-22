import { Check, Loader2, X } from "lucide-react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as Dialog from "@radix-ui/react-dialog";


const createTagSchema = z.object({
    title: z.string().min(3, { message: 'Minimum 3 characters.' }),
})

type CreateTagSchema = z.infer<typeof createTagSchema>

// function removeAccents(inputString: string): string {
//     // Normalize and replace accentuated characters
//     const cleanedString = inputString.replace(/[\u0300-\u036f]/g, '');
//     return cleanedString;
// }

function generateSlug(inputString: string): string {
    // Remove symbols, spaces, accentuation, and convert to lowercase
    const cleanedString = inputString
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

    return cleanedString;
}

export function CreateTagForm() {
    const  queryClient  = useQueryClient()

    const { register, handleSubmit, watch, formState } = useForm<CreateTagSchema>({
        resolver: zodResolver(createTagSchema),
    })

    const slug = watch('title')
        ? generateSlug(watch('title'))
        : ''


    const { mutateAsync } = useMutation({
        mutationFn: async ({ title }: CreateTagSchema) => {

            await new Promise(resolve => setTimeout(resolve, 2000))

            await fetch('http://localhost:3333/tags', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    slug,
                    amountOfVideos: 0,
                }),
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:['get-tags'],
            })
        }
    })


    async function createTag({ title }: CreateTagSchema) {
        await mutateAsync({ title })
    }




    return (
        <form onSubmit={handleSubmit(createTag)} className="w-full space-y-6">
            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="name">Tag name</label>
                <input
                    {...register('title')}
                    id="title"
                    type="text"
                    className="border-zinc-800 rounded-lg border px-3 py-2 bg-zinc-800/50 w-full"
                />
                {formState.errors?.title && (
                    <p className="text-red-400 text-sm">{formState.errors.title.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="slug">Slug</label>
                <input
                    id="slug"
                    type="text"
                    readOnly
                    value={slug}
                    className="border-zinc-800 rounded-lg border px-3 py-2 bg-zinc-800/50 w-full"
                />
            </div>

            <div className="flex items-center justify-end gap-2">

                <Dialog.Close asChild>
                    <Button>
                        <X className="size-3" />
                        Cancel
                    </Button>
                </Dialog.Close>

                <Button
                    disabled={formState.isSubmitting}
                    className="bg-teal-400 text-teal-950"
                    type="submit">
                    {formState.isSubmitting ? <Loader2 className="size-3 animate-spin" /> : <Check className="size-3" />}
                    Save
                </Button>
            </div>
        </form>
    )
}