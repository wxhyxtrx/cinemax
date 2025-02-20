import type React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Text from "@/components/ui/text"

interface FilterItem {
    label: string
    value: string
}

interface FilterProps {
    open: boolean
    setOpen: (open: boolean) => void
    trigger: React.ReactNode
    dataFilter: FilterItem[]
    selectedValues: string[]
    setSelectedValues: (values: string[]) => void
}

export default function FilterSearch({ open, setOpen, trigger, dataFilter, selectedValues, setSelectedValues }: FilterProps) {
    const handleCheckedChange = (value: string) => {
        if (value === "all") {
            // Jika "all" dicentang, hapus semua filter lain dan hanya sisakan "all"
            setSelectedValues(["all"])
        } else {
            let newValues = [...selectedValues]

            if (newValues.includes(value)) {
                // Jika sudah ada, hapus dari selectedValues
                newValues = newValues.filter((v) => v !== value)
            } else {
                // Jika belum ada, tambahkan ke selectedValues
                newValues.push(value)
            }

            // Jika semua filter kecuali "all" dipilih, tambahkan "all" kembali
            const allOtherFilters = dataFilter
                .filter((item) => item.value !== "all")
                .map((item) => item.value)

            if (newValues.length === allOtherFilters.length) {
                newValues = ["all", ...allOtherFilters]
            } else {
                // Jika "all" ada di dalam selectedValues dan filter lain dipilih, hapus "all"
                newValues = newValues.filter((v) => v !== "all")
            }

            setSelectedValues(newValues)
        }
    }


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>{<div>{trigger}</div>}</PopoverTrigger>
            <PopoverContent
                sideOffset={0}
                align="end"
                alignOffset={-15}
                className="w-28 p-2.5 bg-primary-light border-primary-light"
            >
                <div className="space-y-2">
                    <Text className="text-sm text-line-dark font-medium leading-none mb-4">Genre</Text>
                    {dataFilter &&
                        dataFilter.map((item) => (
                            <div className="flex items-center space-x-2" key={item.value}> 
                                <Checkbox
                                    id={item.value}
                                    checked={selectedValues.includes(item.value)}
                                    onCheckedChange={() => handleCheckedChange(item.value)}
                                />
                                <label
                                    htmlFor={item.value}
                                    className="text-sm text-line-dark font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {item.label}
                                </label>
                            </div>
                        ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}

